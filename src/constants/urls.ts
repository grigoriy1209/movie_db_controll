const baseURL = "https://api.themoviedb.org/3";

const movies = '/discover/movie';
const genre = '/genre/movie/list';

const urls ={
    movies: {
        base: movies,
        byId: (id: number): string => `/movie/${id}`,
        byGenre:(genreId:number):string=>`${movies}?with_genres=${genreId}`,
        bySearch:(title:string)=>`/search/movie?query=${title}`
    },
    genres:{
        base:genre,
        byId:(id:number):string =>`${genre}/genre/${id}`,

    }
}
export {
    baseURL,
    urls
}