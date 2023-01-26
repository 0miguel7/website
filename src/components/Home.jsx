import React from "react";
import "./Home.css";
import maninglasses from "./maninglasses.jpg";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>Hello!</h1>

                <p>Hi there, my name is Miguel Eduardo Vegas, I am a Systems Engineer and a Full Stack Web Developer </p>
                <div className="buton_container">
                    <a href="#contact">Contact me</a>
                </div>
            </div>
            {/* <div className="image__container">
                <img src={maninglasses} alt="pipipi" />
            </div> */}
        </div>
    );
};

export default Home;
