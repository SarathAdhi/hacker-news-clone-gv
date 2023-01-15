import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { SearchPage } from "./pages/Search";
import { NewStoriesPage } from "./pages/NewStories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewStoriesPage />} />
        <Route path="/search?" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
