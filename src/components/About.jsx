import React from "react";
import "./About.css";

const About = () => {
    return (
        <div>
            <div className="about_container">
                <div className="image_container">
                    <img src="./avatar_about.png" alt="image"></img>
                </div>

                <div className="text_section">
                    <div>
                        <h1>About Me</h1>
                    </div>
                    <div>
                        <p>
                            I am a full stack web developer based in Peru. I enjoy creating web applications and learn about new technologies. I build
                            in the client side and in the server side with many tools, right now MERN is my favourite stack . I love computers and
                            learn about the way they work. I study Systems Engineering at San Marcos University where I learned many skills related to
                            Computer Sience and Engineering.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
