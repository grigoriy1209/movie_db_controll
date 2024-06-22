import React, {FC, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {useAppDispatch,} from "../../hooks/reduxHooks";
import {IGenre, IMovie} from "../../interfaces";
import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MovieContainer";

import css from "../Header/Header.module.css";

interface IProps{
    genre:IGenre
}
const Genre:FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [movies, setMovies] = useState<IMovie[]>([])
    const [current, setCurrent] = useState<IGenre | null >(null)

const searchMovie = async (genre:IGenre)=>{
        navigate(`?genreId=${genre.id}`)
   const result= await dispatch(moviesActions.getByGenre({genreId:genre.id})).unwrap();
    setMovies(result)};

    useEffect(() => {
        if(current){
            searchMovie(current)
        }
    }, [current]);

    const handleGenre  =(genre:IGenre)=>{
        if(genre.id !==current?.id){
            setCurrent(genre)
        }
    }

    return (
        <div >
            <div className={css.gridItem}>
                <button onClick={()=>handleGenre(genre)}>{genre.name}</button>
            </div>
            <div >
                {
                    movies.map(movie =><div key={movie.id} style={{display:"flex"}} >
                        {<MoviesListCard movie={movie} />}
                    </div>
                    )}
            </div>
        </div>

    )}
export {Genre};
