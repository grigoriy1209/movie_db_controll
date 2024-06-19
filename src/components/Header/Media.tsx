import * as React from "react";
import Grid from "@mui/material/Grid";
import {IMovie} from "../../interfaces/moviesInterface";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import {MoviesListCard} from "../MovieContainer/MoviesListCard";

interface MediaProps {
    loading?: boolean;
    movies: IMovie[];
}

export const Media: React.FC<MediaProps> = ({ loading = false, movies }) => {
    return (
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(3)) : movies).map((movie, index) => (
                <MoviesListCard key={index} movie={movie as IMovie} />
            ))}
        </Grid>
    )};

export const BasicRating: React.FC<{ initialRating: number }> = ({ initialRating }) => {
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
    )};
