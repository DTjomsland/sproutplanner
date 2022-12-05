import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";



const initialState = {
  planner: [],
  plannerCatID: null,
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    setSelectedPlanner: (state, action) => {
      console.log(action.payload);
      state.planner = action.payload;
    },
    setPlannerCatID:(state, action) => {
      console.log(action.payload);
      state.plannerCatID = action.payload;
    }
  }
});

export const { setSelectedPlanner, setPlannerCatID } = plannerSlice.actions;
export default plannerSlice.reducer;
