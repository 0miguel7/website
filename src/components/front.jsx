import React from "react";
import "./front.css";

const front = () => {
    return (
        <div className="front">
            <div className="front-title">
                <h3>FrontEnd Technologies</h3>
            </div>
            <div className="front-body">
                <div className="front-body-upper">
                    <div className="tech-block">
                        <div className="front-image-container">
                            <img src={process.env.PUBLIC_URL + "/front/react2.png"} alt=""></img>
                        </div>
                        <p>React</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/front/css.png"} alt=""></img>
                        </div>
                        <p>CSS</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container">
                            <img src={process.env.PUBLIC_URL + "/front/html.svg"} alt=""></img>
                        </div>
                        <p>Html</p>
                    </div>
                </div>{" "}
                <div className="front-body-lower">
                    {" "}
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/front/javascript.png"} alt=""></img>
                        </div>
                        <p>Javascript</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container">
                            <img src={process.env.PUBLIC_URL + "/front/typescript.png"} alt=""></img>
                        </div>

                        <p>TypeScript</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/front/mui.svg"} alt=""></img>
                        </div>
                        <p>Material UI</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default front;
