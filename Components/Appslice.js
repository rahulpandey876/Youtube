import { createSlice } from "@reduxjs/toolkit";

const AppSlice= createSlice({
    name:"App",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state)=>{
          state.isMenuOpen= !state.isMenuOpen
        },
        CloseMenu:(state)=>{
          state.isMenuOpen=false;
        }
    }
})


export const {toggleMenu, CloseMenu}= AppSlice.actions
export default AppSlice.reducer