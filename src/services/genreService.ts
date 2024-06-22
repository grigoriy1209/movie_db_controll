
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IGenre, IMoviePagination} from "../interfaces";

const genreService = {
    getAll:async ():Promise<IMoviePagination<IGenre>> =>{
        const response = await apiService.get<IMoviePagination<IGenre>>(urls.genres.base);
        return response.data
    },
    byId:async (id:string) =>{
        const response = await apiService.get<IGenre>(urls.genres.byId(+id));
        return response.data
    },

}
export {genreService}