import {FC} from "react";
import * as React from 'react';

import {IGenre} from "../../interfaces/GenreInterface";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux/slices/movieSlice";

interface IProps{
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const searchMovie =()=>{
     dispatch(moviesActions.getByGenre({genreId:genre.id,page:1}))
    }
    return (
        <div>
            <div onClick={searchMovie}>
                {genre.name}
            </div>

        </div>
    );
};
export {Genre};





