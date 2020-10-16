import React from 'react';
import './CustomerSideBar.css';
import logo from '../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import Order from '../Order/Order';
import CustomerServiceList from '../CustomerServiceList/CustomerServiceList';
import Review from '../Review/Review';


const CustomerSidebar = ({go}) => {
    const choice = ['Order', 'Services List', 'Review'];

    let p;
    if(go==='0') p=<Order></Order>
    if(go==='1') p=<CustomerServiceList></CustomerServiceList>
    if(go==='2') p=<Review></Review>
    return (
        <div class="wrapper">
            <div class="sidebar">
               <Link to="/"> <img className='ml-3' src={logo} alt="" /></Link>
                <ul>
                    <li><Link to="/order"><i class="fas fa-cart-plus"></i>Order</Link></li>
                    <li><Link to="/buyproduct"><i class="fas fa-list"></i>Services List</Link></li>
                    <li><Link to="/review"><i class="fas fa-comment-dots"></i>Review</Link></li>
                </ul>

            </div>
            <div class="main_content">
                <div class="header1" >

                    <h5 className='mt-5'>{choice[go]}</h5>

                </div>
                <div class="info" >
                    <div className='table' >
                      {
                          p
                      }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomerSidebar;