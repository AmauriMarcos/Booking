import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/searchSlice';
import propertyReducer from '../features/propertySlice';
import infoReducer from '../features/infoSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        property: propertyReducer,  
        auth: authReducer, 
        info: infoReducer,
    }
})
