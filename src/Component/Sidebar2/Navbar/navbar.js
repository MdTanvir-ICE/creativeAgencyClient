import React from 'react';
import img from '../../images/icons/service1.png'


const navbar = () => {
    return (
       

            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className='d-flex justify-content-between'>
                    <div>
                        <h3>admin</h3>
                    </div>
                    <div className='d-flex'>
                        <img src={img} alt="" />
                        <h5>md. name</h5>

                    </div>
                </div>
            </nav>
      
    );
};

export default navbar;