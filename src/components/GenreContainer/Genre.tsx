import React, {FC, useState} from "react";

import {useAppDispatch,} from "../../hooks/reduxHooks";
import {IGenre, IMovie} from "../../interfaces";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MovieContainer";

import css from "../Header/Header.module.css";
import {useNavigate} from "react-router-dom";

interface IProps{
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [movies, setMovies] = useState<IMovie[]>([])

const searchMovie = async ()=>{
        navigate(`?genreId=${genre.id}`)
   const result= await dispatch(moviesActions.getByGenre({genreId:genre.id})).unwrap();
    setMovies(result)};

    return (
        <div className={css.gridItem}>
            <button onClick={searchMovie}>{genre.name}</button>
            <div >
                {
                    movies.map(movie =><div key={movie.id} >
                        {<MoviesListCard movie={movie} />}
                    </div>
                    )}
            </div>
        </div>

    )}
export {Genre};
