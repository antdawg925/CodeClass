import React from 'react';
import TheHeader from '../Components/TheHeader';
import TuitionScrollBy from '../Components/TuitionScrollBy';
import TuitionInfo from '../Components/TuitionInfo';

const Tuition = () => {
    return (
        <div>
            <TheHeader />

            <div className='flex mt-4'>
                <TuitionScrollBy />
                {/* <div id="media_left" className=''> */}
                <TuitionInfo />
            </div>
        </div >
    );
};

export default Tuition;