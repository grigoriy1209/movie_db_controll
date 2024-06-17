import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "../slices/movieSlice";
import {genreReducer} from "../slices/genreSlice";

const store = configureStore({
    reducer:{
        movies:moviesReducer,
        genres:genreReducer
    }
})

export {store}

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}