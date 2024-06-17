
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {useEffect} from "react";
import {moviesActions} from "../redux/slices/movieSlice";

import {MovieInfo} from "../components/MovieContainer/MovieInfo";

const MovieDetailsPage = () => {
    const {id} = useParams<{id:string}>();

    const dispatch = useAppDispatch();
    const {movie} = useAppSelector(state => state.movies);
      console.log(movie)
    useEffect(() => {
        if(id){
            dispatch(moviesActions.getById(id))
        }

    }, [id, dispatch]);


    return (
        <div>
            { movie && <MovieInfo movie={movie} key={movie.id}/>}
        </div>
    );
};

export {MovieDetailsPage};