import "./App.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Front from "./components/front";
import Back from "./components/back";
import Tools from "./components/devtools";

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
                <Front />
                <Back />
                <Tools />
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
