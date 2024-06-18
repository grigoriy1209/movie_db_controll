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
            <Box sx={{ flexGrow: 1, marginBottom: 2 }}>

                <Typography variant="h6" onClick={searchMovie} sx={{
                    cursor: 'pointer', textAlign: 'center', marginY: 2,
                    display:'flex',justifyContent:'space-between',alignItems:'center'
                }}>
                    {genre.name}
                </Typography>
                    <Grid container spacing={2}>
                        {movies.map(movie => (
                            <Grid item key={movie.id} xs={12} sm={60} md={40} lg={30}>
                                <MoviesListCard movie={movie}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
    );
};
export {Genre};





