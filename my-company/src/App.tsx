import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";


const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "white"}}>
      <Link style={{ margin: "10px", color: "white" }} to="/">
        Home
      </Link>
      <Link style={{ margin: "10px", color: "white" }} to="/about">
        About
      </Link>
      <Link style={{ margin: "10px", color: "white" }} to="/services">
        Services
      </Link>
      <Link style={{ margin: "10px", color: "white" }} to="/contact">
        Contact
      </Link>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home  />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
