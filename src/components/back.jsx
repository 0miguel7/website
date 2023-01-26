import React from "react";
import "./back.css";

const back = () => {
    return (
        <div className="front">
            <div className="front-title">
                <h3>Backend Technologies</h3>
            </div>
            <div className="front-body">
                <div className="front-body-upper">
                    <div className="tech-block">
                        <div className="front-image-container">
                            <img src={process.env.PUBLIC_URL + "/back/typescript.png"} alt=""></img>
                        </div>
                        <p>TypeScript</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/back/node2.png"} alt=""></img>
                        </div>
                        <p>Node JS</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container">
                            <img src={process.env.PUBLIC_URL + "/back/java.png"} alt=""></img>
                        </div>
                        <p>Java</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/back/spring.png"} alt=""></img>
                        </div>
                        <p>Spring Boot</p>
                    </div>
                </div>
                <div className="front-body-lower">
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/databases/mysql2.png"} alt=""></img>
                        </div>
                        <p>MySQL</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/databases/postgre.png"} alt=""></img>
                        </div>
                        <p>PostgreSQL</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/databases/sqlserver.png"} alt=""></img>
                        </div>
                        <p>SQL Server</p>
                    </div>
                    <div className="tech-block">
                        <div className="front-image-container-r">
                            <img src={process.env.PUBLIC_URL + "/databases/mongo1.webp"} alt=""></img>
                        </div>
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default back;
