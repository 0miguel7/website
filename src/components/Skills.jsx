import React from "react";
import "./Skills.css";
import { FiServer } from "react-icons/fi";
import { MdOutlineDevices } from "react-icons/md";
import { FiTool } from "react-icons/fi";

const Skills = () => {
    return (
        <div className="skills">
            <div className="title_skills">
                <h1>Knowledge and Skills</h1>
            </div>
            <div className="box_container">
                <div className="box">
                    <div className="box__title">
                        <MdOutlineDevices size="30px" className="icon" />
                        <h3>Front End </h3>
                    </div>

                    <p>
                        React JS <br />
                        Redux <br />
                        Material UI <br />
                        HTML <br />
                        CSS <br />
                        Javascript <br />
                        Typescript <br />
                    </p>
                </div>
                <div className="box">
                    <div className="box__title">
                        <FiServer size="30px" className="icon" />
                        <h3>Back End </h3>
                    </div>

                    <p>
                        Node JS <br />
                        Typescript <br />
                        Express <br />
                        SQL Server <br />
                        MySQL <br />
                        MongoDB
                        <br />
                    </p>
                </div>
                <div className="box">
                    <div className="box__title">
                        <FiTool size="30px" className="icon" />
                        <h3>Tools</h3>
                    </div>
                    <p>
                        Git <br />
                        GitHub <br />
                        WSL/Linux <br />
                        Docker <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
