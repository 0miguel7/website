import "./App.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
