import { createSlice } from "@reduxjs/toolkit";
import movieListData from "../../../data/movieListData.json";

const movieSlice = createSlice({
  name: "movie",
  initialState: movieListData,
  reducers: {},
});

export default movieSlice.reducer;
