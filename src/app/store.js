import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/searchSlice';
import hotelReducer from '../features/hotelSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        hotel: hotelReducer,  
        user: userReducer, 
    }
})
