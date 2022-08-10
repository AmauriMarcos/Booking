import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/searchSlice';
import hotelReducer from '../features/hotelSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        hotel: hotelReducer,  
        auth: authReducer, 
    }
})
