import React from "react";
import "./Footer.css";
import { FiMail } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="contacto">
                <div className="line">
                    <div className="icon__container">
                        <FiMail size={"20px"} />
                    </div>

                    <p>vegas.migueleduardo@gmail.com</p>
                </div>
                <div className="line">
                    <div className="icon__container">
                        <BiPhone size={"20px"} />
                    </div>

                    <p>+51 955 467 417</p>
                </div>
                <div className="line">
                    <div className="icon__container">
                        <FaLinkedinIn size={"20px"} />
                    </div>

                    <a href="http://www.linkedin.com/in/vegas-miguel/" target="_blank">
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="copy">
                <h4>Miguel Eduardo Vegas Santana</h4>
                <h5>System Engineer | Full Stack Developer - 2022</h5>
            </div>
        </div>
    );
};

export default Footer;
