import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/movieSlice";
import {MoviesListCard} from "./MoviesListCard";
import css from "../Header/Header.module.css";

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
                movies.map((movie) =><MoviesListCard  key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MoviesList};