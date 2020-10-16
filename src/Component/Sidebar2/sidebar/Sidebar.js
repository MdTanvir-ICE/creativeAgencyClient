import React from 'react';
import Navbar from '../../Sidebar2/Navbar/navbar';
import './Sidebar.css';
import logo from '../../images/logos/logo.png'
import ServicesList from '../../ServicesList/ServicesList';
import Addservice from '../../Addsevice/Addservice';
import Makeadmin from '../../Makeadmin/Makeadmin';
import Order from '../../Customer/Order/Order';
import Review from '../../Customer/Review/Review';
import CustomerServiceList from '../../Customer/CustomerServiceList/CustomerServiceList';

const Sidebar = () => {
    return (
        <div class="wrapper">
            <div class="sidebar">
                <img className='ml-3' src={logo} alt="" />
                <ul>
                    <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
                    <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
                    <li><a href="#"><i class="fas fa-address-card"></i>About</a></li>
                    <li><a href="#"><i class="fas fa-project-diagram"></i>portfolio</a></li>
                    <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
                    <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
                    <li><a href="#"><i class="fas fa-map-pin"></i>Map</a></li>
                </ul>

            </div>
            <div class="main_content">
                <div class="header1" >
                    
                    <h5 className='mt-5'>Services List</h5>

                </div>
                <div class="info" >
                  <div className='table' >
                  {/* <ServicesList ></ServicesList> */}
                  {/* <Addservice></Addservice> */}
                  {/* <Makeadmin></Makeadmin> */}
                  {/* <Order></Order> */}
                  {/* <Review></Review> */}
                  {/* <CustomerServiceList></CustomerServiceList> */}
                  </div>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;