import "./App.css";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Book from "./pages/Book";
import BookIndex from "./components/book_part/book_index";
import AddSubject from "./pages/AddSubject";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/book" element={<Book />} />
          <Route path="/index" element={<BookIndex />} />
          <Route path="/addsubject" element={<AddSubject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
