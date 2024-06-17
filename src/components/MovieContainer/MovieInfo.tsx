import {FC} from "react";
import {IMovie} from "../../interfaces/moviesInterface";
import * as React from "react";
import {BasicRating} from "./MoviesListCard";
interface IProps{
    movie:IMovie
}

const MovieInfo:FC<IProps> = ({movie}) => {
    console.log(movie)
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '20px',
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 1,
            }}></div>
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px',
            }}>
                {movie.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        style={{ width: '20%', height: 'auto', float: 'left', marginRight: '20px' }}
                    />
                )}
                <h1>{movie.title}</h1>
                <p>RunTime: {movie.runtime}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>
                    <BasicRating initialRating={movie.vote_average /2 }/>
                    {movie.vote_average}({movie.vote_count})
                </p>

                <p>{movie.overview}</p>
                <p>{movie.tagline}</p>
                <p>{movie.original_title}</p>

                <p>
                    {
                        movie.genres.map((genre,index) =><li key={index}>{genre.name}</li>)
                    }
                </p>


            </div>
        </div>
    );
};

export { MovieInfo };
