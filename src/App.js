import React from "react";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import Work from "./components/work/Projects";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

const App = () => {
  return (
    //  react fragment
    <>
      <Header />
      <Nav />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;