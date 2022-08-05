import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Hotel from "./../pages/hotel/Hotel";
import axios from "axios";

const initialState = {
  entities: [],
  uniqueHotel: [],
  loading: false,
  error: '',
};

//Create 
export const createHotel = createAsyncThunk("hotels/createHotel", async (data) => {
  try {
    const response = await axios.post("http://localhost:8000/api/hotels", data );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
});

//Get 
export const getHotel= createAsyncThunk("hotels/getHotel", async (id) => {
  try{
    const res = await axios.get(`http://localhost:8000/api/hotels/${id}`);
    return res.data
  }catch(error){
    console.log(error.response);
  }
})

//Get all 
export const getAllHotels = createAsyncThunk("hotels/getAllHotels", async () => {
    try{
      const res = await axios.get("http://localhost:8000/api/hotels");
      return res.data
    }catch(error){
      console.log(error.response);
    }
});

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers:  {
      //Create 
      [createHotel.pending]: (state) => {
          state.loading = true
      },
      [createHotel.fulfilled]: (state, {payload}) =>{
         state.loading = false
         console.log(payload);
      },
      [createHotel.rejected]: (state) => {
        state.loading = false;
        state.error = state.error.message;
      },
      //Get 
      [getHotel.pending]: (state) => {
        state.loading = true
      },
      [getHotel.fulfilled]: (state, {payload}) =>{
       state.loading = false
       state.uniqueHotel = payload;
      },
      [getHotel.rejected]: (state) => {
        state.loading = false;
        state.error = state.error.message;
      },
      //Get all 
      [getAllHotels.pending]: (state) => {
        state.loading = true
      },
      [getAllHotels.fulfilled]: (state, {payload}) =>{
       state.loading = false
       state.entities = payload;
      },
      [getAllHotels.rejected]: (state) => {
        state.loading = false;
        state.error = state.error.message;
      },

  }
});

export const { getHotelById } = hotelSlice.actions;
export default hotelSlice.reducer;
