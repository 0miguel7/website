import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar__container">
                    <p>
                        <a href="#home">Home</a>
                    </p>
                    <p>
                        <a href="#about">About</a>
                    </p>
                    <p>
                        <a href="#skills">Skills</a>
                    </p>
                    <p>
                        <a href="#contact">Contact</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
