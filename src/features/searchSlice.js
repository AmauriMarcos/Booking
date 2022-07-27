import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: [
    { id: 1, name: "adults", qtd: 1 },
    { id: 2, name: "children", qtd: 0 },
    { id: 3, name: "rooms", qtd: 1 },
  ],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
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
});

export const { increment, decrement } = searchSlice.actions;
export default searchSlice.reducer;

/* const handleOption = (name, action) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]: action === "increment" ? options[name] + 1 : options[name] - 1,
      };
    });
  }; */
