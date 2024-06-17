import axios, {AxiosError} from "axios";

import {baseURL} from "../constants/urls";
import {authService} from "./authService";
import {router} from "../router";

let isRefreshing= false;
type IWaitList = ()=>void;
const waitList:IWaitList[]=[]

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(req => {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmE1Nzk4ZDY1ODZlYWZlNWQ1MzFmNDhkYjRlMDViMCIsInN1YiI6IjY1ZDhmMmZjMjIzZTIwMDE2MzRlMDQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cZhMYmW5DPwU7GcpkTWOzoKvMNyZsgTqHSWPuYpweJM'
    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`
    }
        return req
},error => {
    return Promise.reject(error)
    }
)

apiService.interceptors.response.use(
    res =>{
        return res
},
    async(error:AxiosError)=>{
   const originalRequest = error.config;
   if(error.response?.status === 401){
       if(!isRefreshing){
           isRefreshing = true;
           try {
               authService.getRefreshToken()
               runAfterRefresh()
               isRefreshing= false;
               return apiService(originalRequest)

           }catch (e){
              authService.deleteTokens()
               isRefreshing=false;
             await router.navigate('/movies?SessionExpired=true')
               return Promise.reject(e)
           }
       }else {
           return new Promise(resolve => {
               waitList.push(()=>resolve(apiService(originalRequest)))
           })
       }
   }
   return Promise.reject(error)
    })
const runAfterRefresh = ():void=>{
    while (waitList.length){
        const cb = waitList.pop();
        cb && cb()
    }
}

export {
    apiService
}