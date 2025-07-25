import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
const Main = lazy(() => import("./pages/Main"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));

import Layout from "./components/Layout";
import { useDispatch } from "react-redux";
import { fetchPopularMovie } from "./features/movie/movieThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovie());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
