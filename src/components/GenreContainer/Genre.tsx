import {FC, useState} from "react";
import * as React from 'react';

import {IGenre} from "../../interfaces/GenreInterface";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {moviesActions} from "../../redux/slices/movieSlice";
import {IMovie} from "../../interfaces/moviesInterface";
import {MoviesListCard} from "../MovieContainer/MoviesListCard";
import {Box, Grid, Typography} from "@mui/material";

interface IProps{
    genre:IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const [movies, setMovies] = useState<IMovie[]>([])

    const searchMovie = async ()=>{
   const result = await  dispatch(moviesActions.getByGenre({genreId:genre.id,page:1})).unwrap();
   setMovies(result.results)

    }
    return (
        <Box sx ={{with:'100%', height:'20%',display:'flex', justifyContent:'space-around',alignItems:'center',flexDirection:'column-reverse'}}>
        <Box sx={{ flexGrow: 1}}>
            <Box sx={{ width:'150px', display: 'flex', justifyContent: 'space-around',
                alignItems: 'center', paddingY: 0, backgroundColor: 'grey',flexDirection:'column'}}
                 onClick={searchMovie}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                    {genre.name}
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {movies.map(movie => (
                    <Grid item key={movie.id} xs={12} sm={60} md={400} lg={4}>
                        <MoviesListCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
            <Box>
                {movies.map(movie => <div>{movie.original_title}</div>)}
            </Box>
        </Box>
        </Box>
    );
};
export {Genre};





