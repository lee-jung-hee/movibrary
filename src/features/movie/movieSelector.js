import { createSelector } from "@reduxjs/toolkit";

export const selectMovie = (movieId) =>
  createSelector(
    (state) => state.movie,
    (movie) => movie.data.results.find((el) => el.id === movieId)
  );

export const selectSearchMovie = (movieTitle) =>
  createSelector(
    (state) => state.movie.data,
    (movie) => movie.results.filter((el) => el.title.match(movieTitle))
  );
