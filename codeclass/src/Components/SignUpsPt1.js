import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";

const SignUpsPt1 = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [number, setNumber] = useState("");
    const [numberError, setNumberError] = useState("");
    const [areaCode, setAreaCode] = useState("")
    const [areaCodeError, setAreaCodeError] = useState("")
    const [sub, setSub] = useState("");
    const [recruitingContact, setRecruitingContact] = useState(false);
    const [border, setBorder] = useState("none")
    const [display1, setDisplay1] = useState("")
    const [display2, setDisplay2] = useState("none")
    const [display3, setDisplay3] = useState("none")

    useEffect(() => {
        if (sub) {
            // setDisplay1("");
            setDisplay2("");
        }
    }, [sub]);

    function sendEmail(e) {
        e.preventDefault();
        console.log("Sending");

        if (
            email.length < 1 ||
            name.length < 1 ||
            number.length < 10 ||
            number.length > 14 ||
            !recruitingContact ||
            areaCode.length < 5 ||
            areaCode.length > 5
        ) {
            console.error("Error: All fields are required");
            if (number.length < 10 || number.length > 14) {
                setNumberError("Please use your 10 digit phone number")
            } else setNumberError("")

            if (areaCode.length < 5 || areaCode.length > 5) {
                setAreaCodeError("Please enter your zip code")
            } else setAreaCodeError("")
            if (email.length < 5) {
                setEmailError("Please enter a valid email")
            } else setEmailError("")
            if (name.length < 3) {
                setNameError("Please enter your first and last name")
            } else setNameError("")
            if (recruitingContact === false) {
                setBorder("2px solid #267dfd")
            } else setBorder("none")
            if (recruitingContact === true) {
                setBorder("none")
            }
            return;
        }

        console.log(e.target);
        emailjs
            .sendForm("service_eanrgxt", "template_6kt99ud", e.target, "HTpW9erczHebshG2g")
            .then((result) => {
                console.log("sub", sub);
                console.log(result.text);
            })
            .catch((error) => {
                console.error(error.text);
            });

        navigate('/thankyou');
    }

    function setUpPart2() {
        setDisplay1("none");
        setDisplay2("none");
        setDisplay3("");
    }

    return (
        <div className="row justify-content-center text-center mx-1">

            <form onSubmit={sendEmail} className="bg-light p-4 rounded shadow col-md-6 min-vh-50">
                <h5 className='fw-bold mb-4'>Get Your Free Coding Class Syllabus</h5>

                <div className="mb-3" style={{ display: display1 }}>
                    <label>Select your subject <span className='redSpan'>*</span></label>
                    <select name="sub" className="form-select" value={sub} onChange={(e) => setSub(e.target.value)}>
                        <option value="SelectSubject">Select a subject</option>
                        <option value="WebApp">Web-app development</option>
                        <option value="WebAppAndDatabase">Web-apps and databases</option>
                        <option value="Other">Web deployment</option>
                        <option value="AlgoTraining">Algorithm training</option>
                        <option value="IntoToAI">Intro to AI</option>
                    </select>
                </div>

                <h5 className="btn btn-primary my-4 px-4" style={{ display: display2 }} onClick={(e) => setUpPart2()}>Get More Info!</h5>



                <div className="row justify-content-center" style={{ display: display3 }}>
                    <div className="mb-2">
                        {nameError ? <p style={{ color: "red", marginBottom: "0" }}>{nameError}</p> : null}
                        <>Your name: <span className='redSpan'>*</span></>
                        <input type="text" className="form-control" placeholder=" Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        {numberError ? <p style={{ color: "red", marginBottom: "0", lineHeight: "14px" }}>{numberError}</p> : null}
                        <>Your phone number: <span className='redSpan'>*</span></>
                        <input type="tel" className="form-control" placeholder=" Phone number" min="10" name="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        {emailError ? <p style={{ color: "red", marginBottom: "0" }}>{emailError}</p> : null}
                        <>Your email: <span className='redSpan'>*</span></>
                        <input type="email" className="form-control" placeholder=" Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-2">
                        {areaCodeError ? <p style={{ color: "red", marginBottom: "0" }}>{areaCodeError}</p> : null}
                        <>5 digit area code: <span className='redSpan'>*</span></>
                        <input className="form-control" placeholder=" Area Code" type="text" min="5" max="5" name="areaCode" value={areaCode} onChange={(e) => setAreaCode(e.target.value)} />
                    </div>

                    <div className="mb-2 d-flex p-1" style={{ border: border }}>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="contactPermission"
                            checked={recruitingContact}
                            onChange={(e) => setRecruitingContact(e.target.checked)}
                        />
                        <label className="form-check-label">
                            I consent to being contacted by The Coding Class For Kids recruiting team via telephone or email for additional information.
                        </label>

                    </div >
                    <button type="submit" className="btn btn-primary ">Send!</button>
                </div>

            </form>
        </div>
    );
};

export default SignUpsPt1;
