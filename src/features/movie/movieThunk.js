import { createAsyncThunk } from "@reduxjs/toolkit";
import popularMovie from "../../api/movieList";

export const fetchPopularMovie = createAsyncThunk(
  "movie/fetchPopularMovie",
  async (_, { rejectWithValue }) => {
    try {
      const response = await popularMovie();
      const nonAdultPopularMovies = response.results.filter(
        (movie) => movie.adult === false
      );
      return { ...response, results: nonAdultPopularMovies };
    } catch (err) {
      return rejectWithValue(err.toString());
    }
  }
);
