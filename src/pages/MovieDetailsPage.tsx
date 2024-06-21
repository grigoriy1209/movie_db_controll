import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {moviesActions} from "../redux";
import {MovieInfo} from "../components";

const MovieDetailsPage = () => {
    const {id} = useParams<{id:string,}>();

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
            { movie && <MovieInfo movie={movie} key={movie.id} />}
        </div>
    );
};

export {MovieDetailsPage};