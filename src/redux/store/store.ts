import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "../slices/movieSlice";

const store = configureStore({
    reducer:{
        movies:moviesReducer,
    }
})

export {store}

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}