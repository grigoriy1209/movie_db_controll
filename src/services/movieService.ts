import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IMovie, IMoviePagination} from "../interfaces";

const movieService = {
    getAll: async (page: string): Promise<IMoviePagination<IMovie>> => {
        const response = await apiService.get<IMoviePagination<IMovie>>(urls.movies.base, {params: {page}});
        return response.data
    },
    byId: async (id: string):Promise<IMovie>=> {
        const response = await apiService.get<IMovie>(urls.movies.byId(+id));
        return response.data
    },
    getGenre:async (genreId:number):Promise<IMoviePagination<IMovie>> =>{
        const response = await apiService.get<IMoviePagination<IMovie>>(urls.movies.byGenre(genreId));
        return response.data
    },
    getSearch:async (query:string) :Promise<IMoviePagination<IMovie>> =>{
        const response =await apiService.get<IMoviePagination<IMovie>>(urls.movies.bySearch(query));
        return response.data
    }

}
export {
    movieService
}