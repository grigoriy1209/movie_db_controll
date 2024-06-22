import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IMovie, IMoviePagination} from "../../interfaces";
import {movieService} from "../../services";

interface IState{
    movies:IMovie[],
    page:number
    pagination:IMoviePagination<IMovie> | null,
    movie:IMovie | null,
    genreMovies:IMovie[]
    genre:IGenre | null,
    error:string | null
}
let movieInitialState:IState={
    movies: [],
    page:1,
    pagination:null,
    genreMovies:[],
    movie:null,
    genre:null,
    error:null
};
const getAll = createAsyncThunk<IMoviePagination<IMovie>,number,{rejectValue:string}>(
    'moviesSlice/getAll',
    async (page,{rejectWithValue})=>{
        try {
                const response = await movieService.getAll(page.toString())
            return response;
        }catch (e){
            const error = e as AxiosError
            return rejectWithValue(error.message ||'')
        }
    }
)
const getById = createAsyncThunk<IMovie, string, {rejectValue:string}>(
    'moviesSlice/getById',
    async (id,{rejectWithValue})=>{
        if(id){
            try {
              const  movie = await movieService.byId(id)
                return movie
            }catch (e){
                const error = e as AxiosError
                return rejectWithValue(error.message || '')
            }
        }
        return null
    }
)
const getByGenre = createAsyncThunk(
    'moviesSlice/getByGenre',
    async ({genreId}:{genreId:number},thunkAPI)=>{
        try {
            const response = await movieService.getGenre(genreId);
            return response.results
        }catch (error){
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const getBySearch = createAsyncThunk<IMoviePagination<IMovie>, string, { rejectValue: string }>(
    'movieSlice/getBySearch',
    async (query,{rejectWithValue})=>{

        try {
            const response =await movieService.getSearch(query);
            return response
        }catch (e){
            const error = e as AxiosError;
            return  rejectWithValue(error.message || '')
        }
    }
)

const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState:movieInitialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state,action:PayloadAction<IMoviePagination<IMovie>>)=>{
                state.movies = action.payload.results
                state.pagination ={
                    total_pages:action.payload.total_pages,
                    total_results:action.payload.total_results,
                    page:action.payload.page,
                    results:action.payload.results,
                    genres:action.payload.genres
                }
                state.page = action.payload.page
                state.error = null
            })
            .addCase(getAll.rejected,(state,action)=>{
                state.error = null
            })
            .addCase(getAll.pending,(state)=>{
                state.error = null
            })
            .addCase(getById.fulfilled,(state,action:PayloadAction<IMovie>)=>{
                state.movie = action.payload;
            })
            .addCase(getById.rejected,(state, action)=>{
                state.error = null
            })
            .addCase(getById.pending,(state)=>{
                state.error = null
            })
            .addCase(getByGenre.fulfilled,(state,action)=>{
             state.genreMovies = action.payload

            })
            .addCase(getBySearch.fulfilled,(state,action:PayloadAction<IMoviePagination<IMovie>>)=>{
                state.movies = action.payload.results
                state.pagination ={
                    total_pages:action.payload.total_pages,
                    total_results:action.payload.total_results,
                    page:action.payload.page,
                    results:action.payload.results,
                    genres:action.payload.genres
                }
            })


})
const {reducer:moviesReducer, actions} = moviesSlice

 const moviesActions = {
    ...actions,
    getAll,
     getById,
     getByGenre,
     getBySearch
}
export {
    moviesActions,
    moviesReducer
}