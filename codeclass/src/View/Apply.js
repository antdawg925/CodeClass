import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";
import TheHeader from '../Components/TheHeader';

const Apply = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [sub, setSub] = useState("");
    const [message, setMessage] = useState("");
    const [age, setAge] = useState(0);
    const [recruitingContact, setRecruitingContact] = useState(false);
    const [border, setBorder] = useState("none");
    const [subError, setSubError] = useState("");
    const [scheduleError, setScheduleError] = useState("");
    const [skillLevelError, setSkillLevelError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [areaCode, setAreaCode] = useState("");
    const [areaCodeError, setAreaCodeError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [skillLevel, setSkillLevel] = useState("");
    const [schedule, setSchedule] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        if (sub === "") {
            setSubError("Please select a project");
        } else {
            setSubError("");
        }

        if (schedule === "") {
            setScheduleError("Please select a project");
        } else {
            setScheduleError("");
        }

        if (skillLevel === "") {
            setSkillLevelError("Please select a project");
        } else {
            setSkillLevelError("");
        }

        if (email.length < 1 || name.length < 1 || number.length < 1 || message.length < 1 || age < 1 || !recruitingContact) {
            if (email.length < 4) {
                setEmailError("Enter a valid email");
            } else {
                setEmailError("");
            }

            if (name.length < 2) {
                setNameError("Enter your full name");
            } else {
                setNameError("");
            }

            if (number.length < 10 || number.length > 14) {
                setNumberError("Enter your 10-digit number");
            } else {
                setNumberError("");
            }

            if (age < 5) {
                setAgeError("Enter your child's age");
            } else {
                setAgeError("");
            }

            if (areaCode.length < 5) {
                setAreaCodeError("Enter your 5-digit area code");
            } else {
                setAreaCodeError("");
            }

            if (!recruitingContact) {
                setBorder("2px solid red");
            } else {
                setBorder("none");
            }

            return;
        }

        emailjs.sendForm("service_eanrgxt", "template_wkks01y", e.target, "HTpW9erczHebshG2g")
            .then((result) => {
                console.log("sub", sub);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setNumber("");
        setEmail("");
        setMessage("");
        setName("");
        setSub("");
        setAge(0);
        setRecruitingContact(false);
        setBorder("none");
        navigate("/thanks");
    }

    return (
        <div style={{ height: "auto", width: "100vw", margin: "auto" }} className="row justify-content-center">
            <TheHeader />

            <h3 className="test text-center">Begin building your child's professional portfolio now!</h3>

            <div id="applicationBox" style={{ margin: "10px 50px" }}>

                <form onSubmit={sendEmail} className="p-3 rounded min-vh-50">

                    <div className="mb-3">
                        {subError && <p style={{ color: "red", marginBottom: "0" }}>{subError}</p>}

                        <>Select the project <span className='redSpan'>*</span></>
                        <select name="sub" className="form-select" value={sub} onChange={(e) => setSub(e.target.value)}>
                            <option value="SelectProject">Select a project</option>
                            <option value="WebApp">Web-app development</option>
                            <option value="WebAppAndDatabase">Web-apps and databases</option>
                            <option value="Other">Web deployment</option>
                            <option value="AlgoTraining">Algorithm training</option>
                            <option value="IntoToAI">Intro to AI</option>
                        </select>
                    </div>

                    {/* <div className="mb-3">
                        {scheduleError && <p style={{ color: "red", marginBottom: "0" }}>{scheduleError}</p>}

                        <>Select a schedule: <span className='redSpan'>*</span></>
                        <select name="schedule" className="form-select" value={schedule} onChange={(e) => setSchedule(e.target.value)}>
                            <option value="Select">Select a schedule</option>
                            <option value="Mon">Mondays</option>
                            <option value="Wed">Wednesdays</option>
                            <option value="Sat">Saturday</option>
                            <option value="MonWed">Mondays and Wednesdays</option>
                            <option value="TueThur">Tuesdays and Thursdays</option>
                        </select>
                    </div> */}

                    <div className="mb-3">
                        {skillLevelError && <p style={{ color: "red", marginBottom: "0" }}>{skillLevelError}</p>}

                        <>Child's skill level: <span className='redSpan'>*</span></>
                        <select name="skillLevel" className="form-select" value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
                            <option value="select">Select a skill level</option>
                            <option value="beg">Just starting out</option>
                            <option value="basic">Knows the basics</option>
                            <option value="intermid">Intermediate</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            {nameError && <p style={{ color: "red", marginBottom: "0" }}>{nameError}</p>}
                            <>Your name: <span className='redSpan'>*</span></>
                            <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="col-md-6 mb-3">
                            {numberError && <p style={{ color: "red", marginBottom: "0" }}>{numberError}</p>}
                            <>Phone number: <span className='redSpan'>*</span></>
                            <input type="tel" className="form-control" placeholder="Phone number" min="10" name="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                    </div>

                    <div className="mb-3">
                        {emailError && <p style={{ color: "red", marginBottom: "0" }}>{emailError}</p>}
                        <>Your email: <span className='redSpan'>*</span></>
                        <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            {ageError && <p style={{ color: "red", marginBottom: "0" }}>{ageError}</p>}
                            <>Child's age: <span className='redSpan'>*</span></>
                            <input type="number" className="form-control" placeholder="Child's age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className="col-md-6 mb-3">
                            {areaCodeError && <p style={{ color: "red", marginBottom: "0" }}>{areaCodeError}</p>}
                            <>Zip code: <span className='redSpan'>*</span></>
                            <input className="form-control border" placeholder="Area Code" type="text" min="5" max="5" name="areaCode" value={areaCode} onChange={(e) => setAreaCode(e.target.value)} />
                        </div>
                    </div>

                    <div className="mb-3">
                        <h4>Additional info:</h4>
                        <textarea type="text" placeholder="Questions and information you would like to share" name="message" rows="5" cols="22" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>

                    <div className="mb-3 d-flex p-2" style={{ border: border }}>
                        <input
                            type="checkbox"
                            className="form-check-input me-2"
                            name="contactPermission"
                            checked={recruitingContact}
                            onChange={(e) => setRecruitingContact(e.target.checked)}
                        />
                        <label className="form-check-label">
                            I consent to being contacted by The Coding Class For Kids recruiting team via telephone or email for additional information.
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Send!</button>
                </form>
            </div>
        </div>
    );
};

export default Apply;
