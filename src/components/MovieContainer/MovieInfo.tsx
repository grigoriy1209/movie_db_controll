import {FC, useEffect, useState} from "react";
import * as React from "react";
import {Badge, Box, Stack} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {MoviesListCard} from "./MoviesListCard";
import {IMovie} from "../../interfaces";
import {moviesActions} from "../../redux";
import {BasicRating} from "../Header";

interface IProps {
    movie: IMovie,
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchMovies, setSearchMovies] = useState<IMovie[]>([])

    const {genreMovies} = useAppSelector(state => state.movies)

    useEffect(() => {
       setSearchMovies(genreMovies);
    }, [genreMovies]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
       const genreId = params.get('genreId');
       if(genreId){
         dispatch(moviesActions.getByGenre({genreId:Number(genreId)}))
       }
    }, [dispatch, location.search]);

    const searchMovieGenre =async (genreId: number) => {
        navigate(`?with_genres=${genreId}`)
       const result = await dispatch(moviesActions.getByGenre({ genreId})).unwrap();
      setSearchMovies(result)
    }
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '0',
            margin: '0',
        }}>
            {movie.poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    style={{width: '20%', height: 'auto', float: 'left', marginRight: '20px'}}
                />
            )}
            <h1 style={{padding:'0', margin:'0'}}>{movie.title}</h1>
            <p>RunTime: {movie.runtime}</p>
            <p>Release Date: {movie.release_date}</p>
            <>
                <BasicRating initialRating={movie.vote_average / 2}/>
                {movie.vote_average}({movie.vote_count})
            </>
            <p>{movie.overview}</p>
            <p>{movie.tagline}</p>
            <p>{movie.original_title}</p>
            <Stack direction="row" spacing={1}>
                {movie.genres.map((genre, index) =>
                    <Badge key={index} badgeContent={genre.name} color="warning">
                        <Box component="span" sx={{ ...shapeStyles, cursor: '' }} onClick={() => searchMovieGenre(genre.id)} />
                    </Badge>
                )}
            </Stack>
            {
                searchMovies && searchMovies.map((genreMovie:IMovie)=><MoviesListCard key={genreMovie.id} movie={genreMovie}/>)
            }
        </div>
    );};
export {MovieInfo};
const shapeStyles = { backgroundColor: 'grey', width: 60, height: 40 , borderRadius: '10px', opacity:.5};
