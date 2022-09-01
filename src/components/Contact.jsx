import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs
            .sendForm("service_ew9329q", "template_ewlkzzv", event.target, "NGDRsS0-j3I3gZ8ik")
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    return (
        <div className="contact">
            <div className="contact_icon">
                <img src="./message.png"></img>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Contact</h1>
                    <label>Name</label>
                    <input type="text" name="user_name"></input>
                    <label>Email</label>
                    <input type={"email"} name="user_mail"></input>
                    <label>Write a message</label>
                    <textarea type={"text"} className="message" name="user_text"></textarea>
                    <div className="button_area">
                        <button type="">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
