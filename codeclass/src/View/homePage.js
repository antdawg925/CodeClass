import React from 'react';
import { useNavigate } from 'react-router-dom';
import kidStudying from "../Pictures/kidStudying.jpg";
import glassCode from "../Pictures/glassesCode.jpg";
import HTMLpic from "../Pictures/HTMLpic.jpg";
import cleanLaptop from "../Pictures/cleanLaptop.jpg";
import group from "../Pictures/group.jpg";
import groupCode from "../Pictures/groupCode.jpg";
import kidCoding from "../Pictures/kidCoding.jpg";

function HomePage() {
    const navigate = useNavigate();

    const redirectToProjectsPage = () => {
        navigate("/projects");
    };

    return (
        <div className=''>
            <div className='p-3 text-primary-emphasis bg-primary-subtle sticky-top w-100'>

                <h1 className='ms-4'>The Coding Class for Kids</h1>
                <h5 className='ms-5 fw-bold'>Teaching Silicon Valley Standards</h5>

            </div>

            <div id="homeBackground" className="row w-100  m-0">
                <div className="col"></div> {/* Empty column to push content to the right */}
                <div className="col"></div> {/* Adjust the width as needed */}
                <div id="homePgInfo" className="col">
                    <h2>Invest in Your Child's Future Today!</h2>
                    <p>
                        Don't miss this opportunity to give your child a head start in building career-developing
                        skills and increasing their computer literacy. Join The Coding Class for Kids today and watch
                        your child unlock their full potential in the exciting world of coding!
                    </p>
                </div>
            </div>

            <div className="container text-center w-100 bg-secondary mb-4">

                <div className="row w-100 m-0 align-items-center">
                    <div className="col-lg-6">
                        <img src={kidCoding} alt="kidCoding" className='img-fluid rounded' />
                    </div>

                    <div className="col-lg-6">
                        <div className="card bg-light m-4 p-4">
                            <h2>The benefits for your child:</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <span className='fw-semibold text-decoration-underline text-primary'>Boosted Confidence: </span>
                                    As children see their coding projects come to life, their confidence soars.
                                    They learn that they have the ability to create, innovate, and problem-solve –
                                    valuable skills that will serve them well in any field they choose to pursue.
                                    Coding encourages a growth mindset, resilience, and a sense of achievement.
                                </li>
                                <li>
                                    <span className='fw-semibold text-decoration-underline text-primary'>Increased Computer Literacy: </span>
                                    In today's digital world, computer literacy is essential. Our classes provide students with a solid foundation in coding and technology,
                                    empowering them to navigate and excel in an increasingly tech-driven society.
                                    Learning to code not only teaches technical skills but also fosters computational thinking and problem-solving abilities.
                                </li>
                                <li>
                                    <span className='fw-semibold text-decoration-underline text-primary'>Professional Portfolio: </span>
                                    By the end of our program, students will have developed a professional portfolio showcasing their coding projects.
                                    This portfolio not only demonstrates their skills and accomplishments but also serves as a valuable asset for future academic or career endeavors.
                                    Employers and universities value applicants with a diverse skill set and real-world project experience.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row w-100 m-0 align-items-cente">
                    <div className="col-lg-6">
                        <img src={glassCode} alt="glassCode" className='img-fluid rounded' />
                    </div>
                    <div className="col-lg-6">
                        <div className="card bg-light m-4 p-4">
                            <p>Begin your child's career pathing today!</p>
                            <button className='btn btn-info' onClick={redirectToProjectsPage}>View project ideas</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='text-bg-danger p-3 d-flex flex-column'>
                <h2>Enroll by Thursday start by Monday</h2>
                <h4>Contact us now!</h4>
            </div> */}

            <div className='w-100 bg-primary-subtle m-0 p-0 h-10 d-flex justify-content-center'>
                <button className='m-2 btn btn-info'>Contact us</button>
                <button className='m-2 btn btn-info' onClick={() => navigate("/apply")}>Apply Now!</button>
            </div>

        </div>
    );
}

export default HomePage;
