import React from 'react';
import { useNavigate } from 'react-router-dom';
import kidCoding from "../Pictures/kidCoding.jpg";
import glassCode from "../Pictures/glassesCode.jpg";
import SignUpsPt1 from '../Components/SignUpsPt1';
import Logo from '../Pictures/technical-support.png'

function HomePage() {
    const navigate = useNavigate();

    const redirectToProjectsPage = () => {
        navigate("/projects");
    };

    return (
        <div>
            <div className='p-2 bg-primary-subtle sticky-top w-100 d-flex justify-content-between'>
                <div className='m-1 d-flex justify-content-between'>
                    <img src={Logo} alt="logo" className='logo' />
                    <div style={{ margin: "0px", padding: "0px" }}>
                        <h1 className='ms-1' id="homeTitle">The Coding Class for Kids</h1>
                        <h5 className='ms-1 fw-bold' id="homeSlogan">Invest in your child's future today!</h5>
                    </div>

                </div>
                <button className='m-1 rounded' style={{ height: "60px" }} onClick={() => navigate("/apply")}>Apply Now!</button>

            </div>

            <div id="homeBackground" className="row w-100 m-0">

                <div className="col"></div> {/* Adjust the width as needed */}

                <div id="homePgInfo" className="col">
                    <SignUpsPt1 />
                </div>
            </div>

            {/* <h4 className="statement-container">       Don't miss this opportunity to give your child a head start in building career-developing
                skills and increasing their computer literacy. Join The Coding Class for Kids today and watch
                your child unlock their full potential in the exciting world of coding!</h4>
            <p>

            </p> */}

            <div className="container text-center w-100 bg-secondary my-4">
                <div className="row w-100 m-0 align-items-center">
                    <div className="col-lg-6">
                        <img src={kidCoding} alt="kidCoding" className='img-fluid rounded' />
                    </div>

                    <div className="col-lg-6">
                        <div className="card bg-light m-4 p-4">
                            <h2>The benefits for your child:</h2>
                            <ul className="list-unstyled">
                                <li className='mt-1'>
                                    <span className='fw-semibold text-decoration-underline text-primary'>Unlock your child's potential with interactive online coding classes:</span>
                                    <p>
                                        Empower your child for success in the digital era! Discover engaging nationwide afterschool coding classes tailored for young minds, offered by The Coding Class for Kids.
                                    </p>
                                </li>
                                <li className='mt-1'>
                                    <span className='fw-semibold text-decoration-underline text-primary'>Boosted Confidence: </span>
                                    Watch your child's confidence soar as they bring their coding projects to life. Coding fosters valuable skills like creativity, problem-solving, and resilience, empowering them for success in any field.
                                </li>
                                <li className='mt-3'>
                                    <span className='fw-semibold text-decoration-underline text-primary '>Increased Computer Literacy: </span>
                                    Empower students for success in today's digital era. Our classes offer a strong foundation in coding and technology, fostering both technical skills and critical thinking for navigating a tech-driven society.
                                </li>
                                <li className="mt-3">
                                    <span className='fw-semibold text-decoration-underline text-primary'>Professional Portfolio: </span>
                                    Upon completion of our program, students will have a professional portfolio featuring their coding projects. This portfolio highlights their achievements and serves as a valuable asset for future academic or career pursuits, highly valued by employers and universities.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row w-100 m-0 align-items-center">
                    <div className="col-lg-6">
                        <img src={glassCode} alt="glassCode" className='img-fluid rounded' />
                    </div>
                    <div className="col-lg-6">
                        <div className="card bg-light m-4 p-4 flex-col">
                            <p>Begin your child's career path today!</p>
                            <button className='btn btn-info' style={{ minWidth: "200px" }} onClick={redirectToProjectsPage}>View projects</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-100 bg-primary-subtle p-4 d-flex justify-content-center'>
                <h5>Outreach@TheCodingClassForKids.com</h5>
            </div>
        </div >
    );
}

export default HomePage;
