import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice"

const Store= configureStore({
    reducer:{
        App: Appslice
    }

})

export default Store