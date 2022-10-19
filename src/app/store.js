import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/searchSlice';
import propertyReducer from '../features/propertySlice';
import roomReducer from '../features/roomSlice';
import infoReducer from '../features/infoSlice';
import authReducer from '../features/authSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        search: searchReducer,
        property: propertyReducer, 
        room: roomReducer,   
        auth: persistedReducer, 
        info: infoReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
  })
