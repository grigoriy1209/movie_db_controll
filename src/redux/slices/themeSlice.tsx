import {createSlice} from "@reduxjs/toolkit";

const themeInitialState = {
    mode:'light'
};
const themeSlice= createSlice({
    name: "themeSlice",
    initialState: themeInitialState,
    reducers:{
        toggleTheme:(state)=>{
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
})
const {reducer:ThemeReducer, actions} = themeSlice;
const themeActions = {
    ...actions,
    toggleTheme:actions.toggleTheme
}
export {
    ThemeReducer,
    themeActions,
};