
import {ITokens} from "../interfaces/tokenInterface";


const _accessTokenKey = 'access'
const _refreshTokenKey = 'refresh'

const  authService = {

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
    },
    // async refreshToken():Promise<void>{
    //     const refreshToken = this.getRefreshToken()
    //     if(!refreshToken){
    //         throw new Error('refresh token not validate')
    //     }
    //     try {
    //           const response = await axios.post(`${baseURL}/auth/refresh`, { token: refreshToken })
    //         this.setTokens(response.data)
    //     }catch (e){
    //           const error = e as AxiosError
    //         throw  new Error ('Failed to refresh token' )
    //     }
    //
    // }
}
export {
    authService
}