import React from 'react';
import { useNavigate } from 'react-router-dom';


const Apply = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    return (
        // Your JSX code here
        <div>
            <button onClick={() => navigate('/')}>Cancel</button>
            <h2>Apply</h2>

        </div>
    );
};

export default Apply;
