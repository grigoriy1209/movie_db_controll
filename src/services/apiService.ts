import axios, {AxiosError} from "axios";

import {baseURL} from "../constants/urls";
import {authService} from "./authService";
import {router} from "../router";

let isRefreshing= false;
type IWaitList = ()=>void;
const waitList:IWaitList[]=[]

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(req =>{
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmE1Nzk4ZDY1ODZlYWZlNWQ1MzFmNDhkYjRlMDViMCIsInN1YiI6IjY1ZDhmMmZjMjIzZTIwMDE2MzRlMDQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cZhMYmW5DPwU7GcpkTWOzoKvMNyZsgTqHSWPuYpweJM'
    if(accessToken){
        req.headers.Authorization = `Bearer ${accessToken}`
}
    const apiKeyToken = '26a5798d6586eafe5d531f48db4e05b0'
    if(apiKeyToken){
        const url  = new URL(req.url!, baseURL)
        url.searchParams.append('api_key', apiKeyToken)
        req.url = url.toString()
    }
    return req
})

apiService.interceptors.response.use(
    res =>{
        return res
},
    async(error:AxiosError)=>{
   const originalRequest = error.config;
   if(error.response.status === 401){
       if(!isRefreshing){
           isRefreshing = true;
           try {authService.getRefreshToken()
               runAfterRefresh()
               isRefreshing= false;
               return apiService(originalRequest)

           }catch (e){
              authService.deleteTokens()
               isRefreshing=false;
              router.navigate('/movies?SessionExpired=true')
               return Promise.reject(e)
           }
       }

   }
    })
const runAfterRefresh = ():void=>{
    while (waitList.length){
        const cb = waitList.pop();
        cb()
    }
}

export {
    apiService
}