import {FC} from "react";
import {IMovie} from "../../interfaces/moviesInterface";
import * as React from "react";
import {BasicRating} from "../Header/Media";
// import {moviesActions} from "../../redux/slices/movieSlice";
// import {useAppDispatch} from "../../hooks/reduxHooks";
// import {IGenre} from "../../interfaces/GenreInterface";

interface IProps{
    movie:IMovie
    // genre:IGenre
}

const MovieInfo:FC<IProps> = ({movie,}) => {
    console.log(movie)
    // const dispatch = useAppDispatch();

    // const serchGenre=async ()=>{
    //     const resGenre = await dispatch(moviesActions.getByGenre({genreId: genre.id, page: 1})).unwrap();
    //     return(resGenre.results)
    // }
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
                <>
                    <BasicRating initialRating={movie.vote_average /2 }/>
                    {movie.vote_average}({movie.vote_count})
                </>

                <p>{movie.overview}</p>
                <p>{movie.tagline}</p>
                <p>{movie.original_title}</p>

                {/*<button onClick={serchGenre}>*/}
                    {
                        movie.genres.map((genre,index) =><li key={index}>{genre.name}</li>)
                    }
                {/*</button>*/}
        </div>
    );
};

export { MovieInfo };

