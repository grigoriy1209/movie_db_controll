
import {urls} from "../constants/urls";
import {apiService} from "./apiService";
import {ITokens} from "../interfaces/tokenInterface";

const _accessTokenKey = 'access'
const _refreshTokenKey = 'refresh'

const  authService = {

    //
    // async refresh():Promise<boolean> {
    //     const refreshToken = this.getRefreshToken();
    //     if(!refreshToken){
    //         return false;
    //     }
    //     try {
    //         const {data} = await apiService.post(urls.auth.refresh, {refresh: refreshToken});
    //         this.setTokens(data)
    //         return true
    //     }catch (e){
    //         return false
    //
    //     }
    //
    // },
    setTokens({refresh,access}:ITokens):void{
        localStorage.setItem(_accessTokenKey, access);
        localStorage.setItem(_refreshTokenKey, refresh);
    },
    getAccessToken():string{
        return localStorage.getItem(_accessTokenKey)
    },
    getRefreshToken():string{
        return localStorage.getItem(_refreshTokenKey)
    },
    deleteTokens():void{
        localStorage.removeItem(_accessTokenKey);
        localStorage.removeItem(_refreshTokenKey);
    }
}
export {
    authService
}