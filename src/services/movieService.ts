
import {IMovie} from "../interfaces/moviesInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IMoviePagination} from "../interfaces/moviePaginationInterface";


const movieService = {
    getAll: async (page: string): Promise<IMoviePagination<IMovie>> => {
        const response = await apiService.get<IMoviePagination<IMovie>>(urls.movies.base, {params: {page}});
        return response.data
    },
    byId: async (id: string)=> {
        const response = await apiService.get<IMovie>(urls.movies.byId(+id));
        return response.data
    },
    getGenre:async (genreId:number,page:number=1):Promise<IMoviePagination<IMovie>> =>{
        const response = await apiService.get<IMoviePagination<IMovie>>(urls.movies.byGenre(genreId));
        return response.data
    },

}
export {
    movieService
}