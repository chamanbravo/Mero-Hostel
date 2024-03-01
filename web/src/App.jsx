import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Error from "./components/Error";
import SearchData from "./pages/SearchData";
import RegisterHostel from "./pages/RegisterHostel";
import HostelDetail from "./pages/HostelDetail";
import Book from "./pages/Book";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";

const App = () => {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hostel/search" element={<SearchData />} />
          <Route path="/hostel/register" element={<RegisterHostel />} />
          <Route path="/hostel/show/:id" element={<HostelDetail />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/hostel/book/:id" element={<Book />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
7;

export default App;
