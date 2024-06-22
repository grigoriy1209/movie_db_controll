import * as React from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from "react-router-dom";
import {FC, PropsWithChildren} from "react";

import {IMovie} from "../../interfaces";
import {BasicRating} from "../Header";

interface IProps extends PropsWithChildren {
    movie:IMovie,
}

 const MoviesListCard:FC<IProps> = ({ movie} ) => {
    const navigate = useNavigate();
    return (
<div style={{display:"flex"} } >
        <button onClick={() => navigate(`/movie/${movie.id}`)}>
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: '220px', height: 'auto' ,}}
                />
            ) : (
                <Skeleton variant="rectangular" width={21} height={11} />
            )}</button>
            <div>
                <Typography gutterBottom variant="body1" width='120px' color='red'>
                    {movie.title}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                    {movie.release_date}
                </Typography>
                <BasicRating initialRating={movie.vote_average / 2} />
            </div>
        </div>
    )};

export {MoviesListCard}