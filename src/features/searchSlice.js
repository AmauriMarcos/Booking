import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  entities: [],
  checkIn: '',
  checkOut: '',
  options: [
    { id: 1, name: "adults", qtd: 1 },
    { id: 2, name: "children", qtd: 0 },
    { id: 3, name: "rooms", qtd: 1 },
  ],
  loading: false,
  error: null,
};

//Get properties by location 
export const getPropertiesByLocation = createAsyncThunk("search/getPropertiesByLocation", async (location) => {
  try{
      const res = await axios.get(`http://localhost:8000/api/properties/search/${location}`);
      console.log(res.data)
      return res.data
    }catch(error){
      console.log(error.response);
    }
});
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleDate(state, {payload}){
      console.log(payload)
      state.checkIn = payload.checkIn
      state.checkOut = payload.checkOut
    },
    increment(state, { payload }) {
      let id = payload;
      state.options.filter((option) => {
        return option.id === id ? option.qtd++ : option;
      });
    },
    decrement(state, { payload }) {
      let id = payload;
      state.options.filter((option) => {
        return option.id === id ? option.qtd-- : option;
      });
    },
  },
  extraReducers: {
    [getPropertiesByLocation.pending] : (state) => {
       state.loading = true;
    },
    [getPropertiesByLocation.fulfilled] : (state, {payload}) => {
      state.loading = false;
      state.entities = payload;
   },
   [getPropertiesByLocation.pending] : (state) => {
      state.loading = false;
      state.error = "Something went wrong!"
 }
  }
});

export const { increment, decrement, handleDate } = searchSlice.actions;
export default searchSlice.reducer;

