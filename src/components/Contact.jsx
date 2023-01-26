import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";

const Contact = () => {
    const [succes, setSucces] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs
            .sendForm("service_ew9329q", "template_ewlkzzv", event.target, "NGDRsS0-j3I3gZ8ik")
            .then((response) => {
                setSucces(true);
                event.target.reset();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="contact">
            <div className="contact_icon">
                <img src={process.env.PUBLIC_URL + "/message.png"}></img>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Contact</h1>
                    <label>Name</label>
                    <input type="text" name="user_name" required></input>
                    <label>Email</label>
                    <input type={"email"} name="user_mail" required></input>
                    <label>Write a message</label>
                    <textarea type={"text"} className="message" name="user_text" required></textarea>
                    {succes ? (
                        <Succes />
                    ) : (
                        <div className="button_area">
                            <button type="">Send</button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

const Succes = () => {
    return (
        <div className="succes_container">
            {" "}
            <div className="succes">
                <AiOutlineCheckCircle size={"40px"} />
                <h3>Message Recieved</h3>
            </div>
        </div>
    );
};

export default Contact;
