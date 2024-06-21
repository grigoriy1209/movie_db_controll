import * as React from "react";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Genre} from "./Genre";
import {genreActions} from "../../redux/slices/genreSlice";

import {moviesActions} from "../../redux/slices/movieSlice";
import {BasicRating} from "../Header/Rating";
import {useNavigate} from "react-router-dom";
import css from "../Header/Header.module.css";

const Genres = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {genres} = useAppSelector(state => state.genres);
    const {movies} = useAppSelector(state => state.movies);

    useEffect(() => {
        dispatch(genreActions.getAll())
        dispatch(moviesActions.getAll(1))
    }, []);


    return (
        <div className={css.StyleGenre}>

                {genres && genres.map((genre) =><Genre key={genre.id} genre={genre}/>)}

            <div>
                {movies && movies.map((movie)=>
                    <div key={movie.id} className={css.gridItem}>
                        <button onClick={()=>navigate(`/movie/${movie.id}`)}>
                        {movie.poster_path && (

                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                style={{width: '20%', height: 'auto', float: 'left', marginRight: '20px'}}
                            />
                        )}</button>
                        <h1>{movie.title}</h1>
                        <p>Release Date: {movie.release_date}</p>
                        <>
                            <BasicRating initialRating={movie.vote_average / 2}/>
                            {movie.vote_average}({movie.vote_count})
                        </>
                    </div>
                )}
              </div>
        </div>
    )}
export {Genres};