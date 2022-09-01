import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>Full Stack Developer</h1>

                <p>My name is Miguel Eduardo and I am a Full Stack Web Developer</p>
                <div className="buton_container">
                    <a href="#contact">Contact me</a>
                </div>
            </div>
            <div className="image__container">
                <img src="./maninglasses.jpg" alt="pipipi" />
            </div>
        </div>
    );
};

export default Home;
