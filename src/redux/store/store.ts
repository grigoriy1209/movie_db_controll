import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, moviesReducer, ThemeReducer} from "../slices";



const store = configureStore({
    reducer:{
        movies:moviesReducer,
        genres:genreReducer,
        theme:ThemeReducer
    }
})

export {store}

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}