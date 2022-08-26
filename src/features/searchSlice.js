import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  entities: [],
  locationID: null,
  checkIn: '',
  checkOut: '',
  options: [
    { id: 1, name: "adults", qtd: 1 },
    { id: 2, name: "children", qtd: 0 },
    { id: 3, name: "rooms", qtd: 1 },
  ],
  price: '',
  days: '',
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
    setLocationID(state, {payload}){
      state.locationID = payload;
    },
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
    handlePriceAndDays(state, {payload}){
      console.log(payload);
      const currentPrice = +payload.price
      const resultPrice =  currentPrice * payload.days
      state.price = resultPrice;
      state.days = payload.days;
    }
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

export const { increment, decrement, handleDate, handlePriceAndDays, setLocationID } = searchSlice.actions;
export default searchSlice.reducer;

