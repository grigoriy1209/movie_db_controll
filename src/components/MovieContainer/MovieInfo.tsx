import {FC, useEffect, useState} from "react";

import * as React from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

// import {MoviesListCard} from "./MoviesListCard";
import {IMovie} from "../../interfaces";
import {moviesActions} from "../../redux";
import {BasicRating} from "../Header";


interface IProps {
    movie: IMovie,
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const dispatch = useAppDispatch();
    const [searchMovies, setSearchMovies] = useState<IMovie[]>([])

    const {genreMovies} = useAppSelector(state => state.movies)

    useEffect(() => {
       setSearchMovies(genreMovies);
    }, [genreMovies]);

    const searchMovie = (genreId: number) => {
        dispatch(moviesActions.getByGenre({ genreId}));
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
            <h1>{movie.title}</h1>
            <p>RunTime: {movie.runtime}</p>
            <p>Release Date: {movie.release_date}</p>
            <>
                <BasicRating initialRating={movie.vote_average / 2}/>
                {movie.vote_average}({movie.vote_count})
            </>
            <p>{movie.overview}</p>
            <p>{movie.tagline}</p>
            <p>{movie.original_title}</p>
            {
                movie.genres.map((genre, index) =>
                    <button key={index} onClick={()=>searchMovie(genre.id)}>{genre.name}</button>
                )}
            {/*{*/}
            {/*    searchMovies && searchMovies.map((genreMovie:IMovie)=><MoviesListCard key={genreMovie.id} movie={genreMovie}/>)*/}
            {/*}*/}
        </div>
    );};
export {MovieInfo};

