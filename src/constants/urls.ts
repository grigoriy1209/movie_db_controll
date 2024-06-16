const baseURL = "https://api.themoviedb.org/3";

const movies = '/discover/movie';
const genre = '/genre/movie/list';

const urls ={
    movies: {
        base: movies,
        byId: (id: number): string => `${movies}/${id}`
    },
    genres:{
        base:genre
    }
}
export {
    baseURL,
    urls
}