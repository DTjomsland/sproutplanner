import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getCategories = createAsyncThunk(
    
)


const initialState = {
  activity: {},
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setSelectedActivity: (state, action) => {
      console.log(action.payload);
      state.activity = action.payload;
    },
  },
});

export const { setSelectedActivity } = activitySlice.actions;
export default activitySlice.reducer;
