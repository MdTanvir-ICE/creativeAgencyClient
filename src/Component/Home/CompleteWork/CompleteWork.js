import React from 'react';
import './CompleteWork.css';
import WorkSlickSlider from './workSlickSlider';

const CompleteWork = () => {
    return (
        <div className="completeWork">
            <div className="container">
               <div className='completeWorkHeader'>
               <h4 className='text-center text-light '>HERE ARE SOME OF <span style={{color:'#7ab259'}}>OUR WORKS</span> </h4>
               </div>
               <div>
                   <WorkSlickSlider></WorkSlickSlider>
               </div>
            </div>
            
        </div>
    );
};

export default CompleteWork;