import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cityEntities: [],
    typeEntities: [],
    loading: false,
    error: null
}

export const countByCity = createAsyncThunk("info/countByCity", async() => {
    try{
        const res = await axios.get("http://localhost:8000/api/info/countByCity");
        return res.data;
    }catch(err){
        console.log(err)
    }
});

export const countByType = createAsyncThunk("info/countByType", async() => {
    try{
        const res = await axios.get("http://localhost:8000/api/info/countByType");
        return res.data;
    }catch(err){
        console.log(err)
    }
});

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {},
    extraReducers: {
        [countByCity.pending]: (state) => {
            state.loading = true
        },
        [countByCity.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.cityEntities = payload
        },
        [countByCity.rejected]: (state) => {
            state.loading = false
            state.error = 'Something went wrong!'
        },
        [countByType.pending]: (state) => {
            state.loading = true
        },
        [countByType.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.typeEntities = payload
        },
        [countByType.rejected]: (state) => {
            state.loading = false
            state.error = 'Something went wrong!'
        }
    }
});

export default infoSlice.reducer;