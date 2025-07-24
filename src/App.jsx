import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MovieDetail from "./pages/MovieDetail";
import Layout from "./components/Layout";

function App() {
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
