import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MovieDetail from "./pages/MovieDetail";
import Navigator from "./components/Navigator";

function App() {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
