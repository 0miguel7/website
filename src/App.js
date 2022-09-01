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
            <section id="home">
                {" "}
                <Home />
            </section>
            <section id="about">
                {" "}
                <About />
            </section>
            <section id="skills">
                {" "}
                <Skills />
            </section>
            <section id="contact">
                {" "}
                <Contact />
            </section>

            <Footer />
        </div>
    );
};

export default App;
