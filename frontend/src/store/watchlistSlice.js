import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    handleAddcoin(state, action) {
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    },
    handleremovecoin(state, action) {
      return state.filter(
        (obj) => JSON.stringify(obj) !== JSON.stringify(action.payload)
      );
    },
  },
});

export const { handleAddcoin, handleremovecoin } = watchlistSlice.actions;
export default watchlistSlice.reducer;
