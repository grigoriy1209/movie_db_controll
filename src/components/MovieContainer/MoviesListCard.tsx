import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { IMovie } from "../../interfaces/moviesInterface";
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';


export const MoviesListCard: React.FC<{ movie: IMovie }> = ({ movie }) => {
    const navigate = useNavigate();
    return (
        <Box sx={{ width: 210, marginRight: 0.5, my: 5 }} onClick={() => navigate(`/movies/${movie.id}`)}>
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: '100%', height: 'auto' }}
                />
            ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
            )}
            <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                    {movie.title}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                    {movie.release_date}
                </Typography>
                <BasicRating initialRating={movie.vote_average / 2} />
            </Box>
        </Box>
    );
};

export const Media: React.FC<MediaProps> = ({ loading = false, movies }) => {
    return (
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(3)) : movies).map((movie, index) => (
                <MoviesListCard key={index} movie={movie as IMovie} />
            ))}
        </Grid>
    );
};


interface MediaProps {
    loading?: boolean;
    movies: IMovie[];
}

const BasicRating: React.FC<{ initialRating: number }> = ({ initialRating }) => {
    const [value, setValue] = React.useState<number | null>(initialRating);

    return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    );
};
