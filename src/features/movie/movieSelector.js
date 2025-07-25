import { createSelector } from "@reduxjs/toolkit";

export const selectMovie = (movieId) =>
  createSelector(
    (state) => state.movie,
    (movie) => movie.data.results.find((el) => el.id === movieId)
  );
