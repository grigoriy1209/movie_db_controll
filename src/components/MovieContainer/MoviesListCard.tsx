import * as React from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from "react-router-dom";
import {FC, PropsWithChildren} from "react";

import { IMovie } from "../../interfaces/moviesInterface";
import {BasicRating} from "../Header/Media";

interface IProps extends PropsWithChildren {
    movie:IMovie,

}


export const MoviesListCard:FC<IProps> = ({ movie } ) => {
    const navigate = useNavigate();
    return (
<div  >
        <button onClick={() => navigate(`/movie/${movie.id}`)}>
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: '100px', height: 'auto' ,padding: '20px' }}
                />
            ) : (
                <Skeleton variant="rectangular" width={21} height={11} />
            )}</button>
            <div>
                <Typography gutterBottom variant="body1">
                    {movie.title}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                    {movie.release_date}
                </Typography>
                <BasicRating initialRating={movie.vote_average / 2} />
            </div>
        </div>
    )};

