const baseURL = "https://api.themoviedb.org/3";

const movies = '/discover/movie';
const genre = '/genre/movie/list';

const urls ={
    movies: {
        base: movies,
        byId: (id: number): string => `${baseURL}/movie/${id}`,
        byGenre:(genreId:number):string=>`${movies}?with_genres=${genreId}`,
        bySearch:(title:string)=>`${baseURL}/search/movie?query=${title}`
    },
    genres:{
        base:genre,
        byId:(id:number):string =>`${baseURL}/genre/${id}`
    }
}
export {
    baseURL,
    urls
}