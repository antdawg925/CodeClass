import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";

const Apply = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [sub, setSub] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [thx, setThx] = useState(false);
    const [age, setAge] = useState(0);
    const [recruitingContact, setRecruitingContact] = useState(false); // State for the recruiting contact checkbox
    const [border, setBorder] = useState("none")

    function sendEmail(e) {
        e.preventDefault();

        if (email.length < 1 || name.length < 1 || number.length < 1 || message.length < 1 || age < 1 || recruitingContact === false) {
            setError("All fields are required")
            if (recruitingContact === false) {
                setBorder("2px solid red")
            }
            console.log("Error: All fields are required")
            return Error;
        }

        emailjs.sendForm("service_giyv6oa", "template_hoq0ftw", e.target, "IzdB39g7KF5jYu2iA")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setThx(true);
        setError("")
        setNumber("")
        setEmail("")
        setMessage("")
        setName("")
        setSub("")
        setRecruitingContact(false); // Reset recruitingContact state after form submission
        setBorder("none")
    }

    return (
        <div style={{ padding: "3rem" }}>

            <div style={{
                backgroundColor: "silver",
                width: "70%",
                margin: "0rem auto",
                padding: "2rem 2rem 4rem 2rem",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}>
                {
                    thx ? (
                        <div id="conformation-box">
                            <h4 id="thanks-box">Thank you for your inquiry! Our team will reach out to the email provided.</h4>
                        </div>
                    ) : null
                }

                <h3 style={{
                    background: "#36dcfb",
                    position: "relative",
                    top: "0",
                    width: "100%",
                    height: "5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                }}>Contact Us Today!</h3>

                <button onClick={() => navigate("/")}>Exit</button>

                <form onSubmit={sendEmail} className="flex-col"
                    style={{
                        alignItems: "left"
                    }}>

                    <h3 style={{ color: "#4a00ff" }}>{error}</h3>

                    <h5>Class Inquiry:</h5>
                    <select name="subject" value={sub} onChange={(e) => setSub(e.target.value)}>
                        <option value="WebApp">Web-app development</option>
                        <option value="WebAppAndDatabase">Web-apps and databases</option>
                        <option value="AlgoTraining">Algorithm training</option>
                        <option value="IntoToAI">Intro to AI</option>
                    </select>

                    <h5>Your name:</h5>
                    <input type="text" placeholder=" Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                    <h5>Your phone number:</h5>
                    <input type="tel" placeholder=" Phone number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} />

                    <h5>Your email:</h5>
                    <input type="email" placeholder=" Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Child's Age:</h5>
                    <input type="number" placeholder=" Age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />

                    <h5>Inquiry:</h5>
                    <textarea type="text" placeholder=" Inquiry" name="message" rows="5" cols="22" value={message} onChange={(e) => setMessage(e.target.value)} />

                    {/* Checkbox for accepting recruiting team contact */}
                    <label style={{ border: border }}>
                        <input type="checkbox" name="contactPermission" value={recruitingContact} onChange={(e) => setRecruitingContact(true)} />
                        <span>
                            I consent to being contacted by The Coding Class for Kids' recruiting team to schedule a class session.
                        </span>
                    </label>


                    <button className="button">Send!</button>

                </form>
            </div>

        </div>
    );
};

export default Apply;
