import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Pictures/technical-support.png';


const TheHeader = () => {
    const navigate = useNavigate();
    return (
        <header className='banner flex justify-content-evenly' style={{ maxWidth: "100vw" }}>

            <div className='flex ' onClick={() => navigate("/")}>

                <img src={Logo} alt="Logo" className='logo' />

                <div className='flex-col'>
                    <h2>The Coding Class </h2>
                    <h2>For KIDS</h2>

                </div>
            </div>

            <div className='flex' id="header_buttons">
                <button onClick={() => navigate('/projects')} className='thankYouButtons rounded'>Projects</button>
                <button onClick={() => navigate('/tuition-dates')} className='thankYouButtons rounded'>Tuition & Dates</button>
                {/* <button onClick={() => navigate('/')} className='thankYouButtons rounded'> Why FullStack </button > */}
                <button onClick={() => navigate('/apply')} className='thankYouButtons rounded bg-success'> Apply </button >

            </div>

        </header>
    );
};

export default TheHeader;