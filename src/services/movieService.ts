
import {IMovie} from "../interfaces/moviesInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IPagination} from "../interfaces/paginationInterface";

const movieService = {
    getAll: async (page: string): Promise<IPagination<IMovie>> => {
        const response = await apiService.get<IPagination<IMovie>>(urls.movies.base, {params: {page}});
        return response.data
    },
    byId: async (id: string): Promise<IMovie> => {
        const response = await apiService.get(urls.movies.byId(+id));
        return response.data
    }
}
export {
    movieService
}