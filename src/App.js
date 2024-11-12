import "./App.css";
import { ThemeProvider } from "../src/hooks/theme_contenxt";
import Header from "./components/widget/Header";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Book from "./pages/Book";
import BookIndex from "./components/book_part/book_index";
import BookContent from "./components/book_part/book_content";
import SiteOwnerId from "./components/identify/siteowner_id";
import AboutWebsite from "./components/identify/about_website";
import ArtclesContent from "./components/book_part/articles_content";
import HeaderContent from "./pages/HeaderContent";
import SearchBox from "./components/widget/search_box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/book" element={<Book />} />
            <Route path="/article/:id" element={<ArtclesContent />} />
            <Route path="/index" element={<BookIndex />} />
            <Route path="/book/:id" element={<BookContent />} />
            <Route path="/owner-id" element={<SiteOwnerId />} />
            <Route path="/about-website" element={<AboutWebsite />} />
            <Route path="/header-content" element={<HeaderContent />} />
            <Route path="/search-box" element={<SearchBox />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
