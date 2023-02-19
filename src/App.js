import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import { data } from "./movieData";
import Celebrity from "./pages/Celebrity";
import Join from "./pages/Join";
import Login from "./pages/Login";
// import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/Tv";

function App() {
  return (
    <div className="root-wrap">
      <>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Movies />} />
          <Route path="movies" element={<Movies />} />

          <Route path="/Movie/:title" element={<MovieDetail />} />

          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
