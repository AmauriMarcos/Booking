import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  roomNumber: '',
  loading: false,
  error: null,
};


const config = {
  headers: {
    "Content-Type": "application/json"
    },
    withCredentials: true
  }

export const updateRoom = createAsyncThunk(
  "room/updateRoom",
  async (reservation) => {
    const { room } = reservation;
    console.log(reservation);
    try {
      const res = await axios.put(
        `http://localhost:8000/api/rooms/${room}`, {
          data: reservation
        },
        config
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    handleRoomNumber(state, { payload }) {
      console.log(payload);
      state.roomNumber = payload;
    },
  },
  extraReducers: {
    [updateRoom.pending]: (state) => {
      state.loading = true;
    },
    [updateRoom.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [updateRoom.pending]: (state) => {
      state.loading = false;
      state.error = "Something went wrong!";
    },
  },
});

export const { handleRoomNumber } = roomSlice.actions;
export default roomSlice.reducer;
