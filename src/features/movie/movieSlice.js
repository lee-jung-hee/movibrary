import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovie } from "./movieThunk";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPopularMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default movieSlice.reducer;
