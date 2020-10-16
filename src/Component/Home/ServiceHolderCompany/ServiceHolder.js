import React from 'react';
import './ServiceHolder.css'
import logo from '../../images/logos/airbnb.png'
import logo1 from '../../images/logos/google.png'
import logo2 from '../../images/logos/netflix.png'
import logo3 from '../../images/logos/slack.png'


const ServiceHolder = () => {
    return (
        <div className='container sevice-holder '>
            <div className="row align-items-center mx-md-5 my-sm-5">
                <div className="col ">
                    <img src={logo} alt="" />
                </div>
                <div className="col">
                    <img src={logo1} alt="" />
                </div>
                <div className="col">
                    <img src={logo2} alt="" />
                </div>
                <div className="col">
                    <img src={logo3} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default ServiceHolder;