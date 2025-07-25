const tokenKey = import.meta.env.VITE_ACCESS_TOKEN;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${tokenKey}`,
  },
};

export const popularMovies = async () =>
  await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&sort_by=created_at.asc",
    options
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
