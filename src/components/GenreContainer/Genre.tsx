import React, {FC, useState} from "react";

import {IGenre} from "../../interfaces/GenreInterface";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux/slices/movieSlice";
import {IMovie} from "../../interfaces/moviesInterface";
import {MoviesListCard} from "../MovieContainer/MoviesListCard";
import css from "../Header/Header.module.css";
interface IProps{
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const [movies, setMovies] = useState<IMovie[]>([])



    const searchMovie = async ()=>{
   const result = await  dispatch(moviesActions.getByGenre({genreId:genre.id,page:1})).unwrap();
   setMovies(result.results)};

    return (
        <div >
            <button onClick={searchMovie}>{genre.name}</button>
            <div >
                {
                    movies.map(movie =><div key={movie.id} >
                        {
                            <MoviesListCard movie={movie}/>

                        }
                    </div>
                    )}
            </div>

        </div>

    )}
export {Genre};
