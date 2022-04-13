import React from "react";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  // const [activeView, setActiveView] = useState(<Header />);

  return (
    //  react fragment
    <>
      {/* <Router> */}
      <Header />
      <Nav />

      {/* <Routes> */}
      {/* <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
      <Projects />
      <About />
      <Contact />
      {/* </Routes> */}
      <Footer />
      {/* </Router> */}
    </>
  );
};

export default App;
