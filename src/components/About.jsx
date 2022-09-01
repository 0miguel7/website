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
                            I am a full stack web developer, i like creating web applications and learn about new techonologies, I build in the client
                            side and in the server side with many tools. I like computers and discover the way they work
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
