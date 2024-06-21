import * as React from "react";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Genre} from "./Genre";
import {genreActions} from "../../redux";

import css from "../Header/Header.module.css";


const Genres = () => {
    const dispatch = useAppDispatch();

    const {genres} = useAppSelector(state => state.genres);


    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);


    return (
        <div className={css.StyleGenre}>
                {genres && genres.map((genre) =><Genre key={genre.id} genre={genre}/>)}
        </div>
    )}
export {Genres};