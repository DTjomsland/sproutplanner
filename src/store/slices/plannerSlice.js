import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
  planner: [],
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    setSelectedPlanner: (state, action) => {
      console.log(action.payload);
      state.planner = action.payload;
    },
    reset: () => initialState
  },
});

export const { setSelectedPlanner } = plannerSlice.actions;
export default plannerSlice.reducer;
