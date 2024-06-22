import * as React from "react";
import {useEffect} from "react";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Genre} from "./Genre";
import {genreActions} from "../../redux";
import css from "../Header/Header.module.css";

const Genres = () => {
    const dispatch = useAppDispatch();

    const {genres} = useAppSelector(state => state.genres);

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);


    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    </IconButton>
                    <Typography variant="h6" color="warning" component="div" className={css.StyleGenre}>
                        {genres.map(genre => (
                            <Genre key={genre.id} genre={genre} />
                        ))}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export {Genres};