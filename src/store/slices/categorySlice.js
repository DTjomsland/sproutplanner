import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getCategories = createAsyncThunk(
    
)


const initialState = {
  category: {},
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      console.log(action.payload);
      state.category = action.payload;
    },
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
