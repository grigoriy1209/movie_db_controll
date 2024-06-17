import {IGenre} from "./GenreInterface";

export interface IMovie {
    id: number,
    backdrop_path: string,
    genres:IGenre [],
    original_title?: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    vote_count: number,
    overview:string,
    runtime:number,
    tagline:string
}