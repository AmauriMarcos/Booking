import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/searchSlice';
import hotelReducer from '../features/hotelSlice';


export const store = configureStore({
    reducer: {
        search: searchReducer,
        hotel: hotelReducer,   
    }
})
