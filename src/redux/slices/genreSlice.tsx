import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IState{
    genres:IGenre[]
}
let genreInitialState:IState={
    genres:[]
}
const getAll = createAsyncThunk<IGenre[],void,{rejectValue:string}>(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {genres} = await genreService.getAll();
            return genres
        }catch (e){
            const error = e as AxiosError
            return rejectWithValue(error.message || '')
        }
    }
)
const genreSlice = createSlice({
    name:'genreSlice',
    initialState:genreInitialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state, action:PayloadAction<IGenre[]>)=>{
                state.genres = action.payload
            })

})
const {reducer:genreReducer, actions} = genreSlice;
const genreActions = {
    ...actions,
    getAll
}
export {
    genreActions,
    genreReducer
}
