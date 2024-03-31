import React from 'react';
import { useNavigate } from 'react-router-dom';
import TheHeader from '../Components/TheHeader';

const ThankYou = () => {
    const navigate = useNavigate();

    return (
        <div id="ThankYou bg-black">
            <TheHeader />
            <body id='thxBody'>
                <h1 className='text-light text-center fs-1 pt-4'>The journey begins!</h1>
                <h4 className='text-light text-center'>Check your inbox for an email from us with program details.</h4>
                <h6 className='text-light text-center'>Ready to take the next step? Submit your application now!</h6>
                <h4 className=' text-success text-center rounded pe-auto pointer' onClick={() => navigate("/apply")}> Apply Now!</h4>

            </body>
            <div id="thankYouInfo" className='flex justify-content-evenly bg-black text-primary'>
                <div>
                    <h2> kl</h2>
                </div>
                <div>
                    <h2> kl</h2>
                </div>
                <div>
                    <h2> kl</h2>
                </div>
            </div>
        </div >
    );
};

export default ThankYou;
