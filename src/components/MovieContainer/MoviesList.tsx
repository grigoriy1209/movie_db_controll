import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {MoviesListCard} from "./MoviesListCard";
import css from "../Header/Header.module.css";
import {moviesActions} from "../../redux";

const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movies);
    console.log(movies)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll(1))


    }, [dispatch]);
    
    return (
        <div  className={css.Style} >
            {
                movies.map((movie) =><MoviesListCard  key={movie.id} movie={movie} />)
            }
        </div>
    );
};

export {MoviesList};