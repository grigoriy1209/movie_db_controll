import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Genre} from "./Genre";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/genreSlice";

const Genres = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genres);
    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);


    return (
        <div>
            {genres && genres.map((genre) =><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};