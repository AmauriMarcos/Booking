import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
  error: null,
};

//USER REGISTER
export const register = createAsyncThunk("users/register", async (data) => {
  try {
    const response = await axios.post("http://localhost:8000/api/auth/register", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

//USER LOGIN
export const login = createAsyncThunk("users/login", async(username) => {
  try{
    const res = await axios.post(`http://localhost:8000/api/auth/login`, username );
    return res.data;
  }catch(err){
    console.log(err.response.data.message);
  }
})

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [register.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [login.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    },
  },
});

export default userSlice.reducer;
