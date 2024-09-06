import "./App.css";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Book from "./pages/Book";
import BookIndex from "./components/book_part/book_index";
import BookContent from "./components/book_part/book_content";
import AddSubject from "./pages/AddSubject";
import SiteOwnerId from "./components/identify/siteowner_id";
import AboutWebsite from "./components/identify/about_website";
import HeaderContent from "./pages/HeaderContent";
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
          <Route path="/book/:id" element={<BookContent />} />
          <Route path="/owner_id" element={<SiteOwnerId />} />
          <Route path="/about_website" element={<AboutWebsite />} />
          <Route path="/header_content" element={<HeaderContent />} />
          <Route path="/addsubject" element={<AddSubject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
