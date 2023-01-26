import React from "react";

const devtools = () => {
    return (
        <div className="front">
            <div className="front-title">
                <h3>Tools</h3>
            </div>
            <div className="front-body">
                <div className="front-body-upper">
                    <div className="tech-block">
                        <div className="front-image-container">
                            <img src={process.env.PUBLIC_URL + "/tools/git.png"} alt=""></img>
                        </div>
                        <p>GIT</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/tools/github2.png"} alt=""></img>
                        </div>
                        <p>GitHub</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container">
                            <img src={process.env.PUBLIC_URL + "/tools/linux.png"} alt=""></img>
                        </div>
                        <p>Linux</p>
                    </div>
                </div>{" "}
                <div className="front-body-lower">
                    {" "}
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/tools/docker.png"} alt=""></img>
                        </div>
                        <p>Docker</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container">
                            <img src={process.env.PUBLIC_URL + "/tools/Azure.png"} alt=""></img>
                        </div>

                        <p>Azure</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default devtools;
