import React from 'react';
import img from '../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-5 mt-5 pt-4  ">
                    <h1 style={{fontWeight:'900',fontSize:'7vh'}}>Let's Grow Your <br/>Brand To The <br/>Next Level </h1>
                    <p> <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt velit iure, qui autem vero.</h6></p>
                    <button className="btn btn-lg btn-dark button">Hire US</button>
                </div>
                <div className="col-md-6 d-none d-sm-block ">
               <img style={{maxHeight:'300px'}} src={img} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;