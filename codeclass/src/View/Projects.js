import React from 'react';
import { useNavigate } from 'react-router-dom';
import PacmanSharks from "../Pictures/PacmanSharks.jpg";
import reactAppPic from "../Pictures/reactAppPic.jpg";
import databasePic from "../Pictures/databasePic.jpg";
import algo from "../Pictures/algo.jpg";
import AIPic from "../Pictures/AIPic.jpg";

function Projects() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    return (
        <div className='text-bg-secondary'>

            <button onClick={() => navigate('/')} className="btn btn-primary mb-4">Go to Home</button>

            <div className='row justify-content-center'>
                <div className='col-10 bg-info bg-gradient p-4'>
                    <h4 className='fw-semibold text-center'>Unlock Your Child's Potential with Fun and Interactive Online Coding Classes</h4>
                    <p>
                        Are you a parent looking to provide your child with valuable skills that will
                        set them up for success in the digital age? Look no further! The Coding Class for
                        kids offers engaging afterschool online coding classes nationwide, designed
                        specifically for young minds.
                    </p>
                </div>
            </div>

            <div className='mt-4'>
                <div className='d-flex'>
                    <img src={reactAppPic} alt="reactAppPic" className='w-25 flex h-25 me-4' />
                    <ul>
                        <h3>Web Pages and Web Apps</h3>
                        <li>Using industry standard libraries and tools to create dynamic web pages</li>
                        <li>Building rewarding web applications to encourage engagement and independent learning</li>
                        <li>Recreating real webpages which can be deployed to the internet</li>
                    </ul>
                </div>

                <div className='d-flex mt-4'>
                    <img src={databasePic} alt="databasePic" className='w-25 flex me-4' />
                    <ul>
                        <h3>Connecting to a Database</h3>
                        <li>Learning how to connect to a database and use it to store and retrieve data</li>
                        <li>Understanding how to use databases to create dynamic web applications</li>
                        <li>Building a personal project that uses a database to increase interest and long-term development</li>
                    </ul>
                </div>

                <div className='d-flex mt-4'>
                    <img src={algo} alt="algo" className='w-25 flex me-4' />
                    <ul>
                        <h3>Algorithm Training</h3>
                        <li>Developing skills to crush Software Engineer technical algorithm questions</li>
                        <li>Learn how to solve problems with code</li>
                        <li>Building confidence to enter the workforce</li>
                    </ul>
                </div>
            </div>
            <h1 className="">Advanced AI lessons</h1>
            <div className="d-flex">

                <img src={AIPic} alt="PacmanSharks" className='mb-4' style={{ width: '25%' }} />

                <ul>
                    <li>Build interactive and engaging AI models</li>
                    <li>Learn the core fundamentals of how AI is created</li>
                    <li>Understand the basics of AI and how it can be used to solve problems</li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;
