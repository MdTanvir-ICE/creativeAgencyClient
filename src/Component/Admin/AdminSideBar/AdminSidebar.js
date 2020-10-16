import React from 'react';
import './AdminSidebar.css';
import logo from '../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import AdminServicesList from '../ServicesList/ServicesList';
import Addservice from '../Addsevice/Addservice';
import Makeadmin from '../Makeadmin/Makeadmin';


const AdminSidebar = ({ go }) => {
    const choice = ['Services List', 'Add Service', 'Make Admin'];
    let p;
    if (go === '0') p = <AdminServicesList></AdminServicesList>
    if (go === '1') p = <Addservice></Addservice>
    if (go === '2') p = <Makeadmin></Makeadmin>
    return (
        <div class="wrapper">
            <div class="sidebar">
                <Link to='/'> <img className='ml-3' src={logo} alt="" /></Link>  
                <ul>
                    <li><Link to="/servicelist"><i class="fas fa-list"></i>Services List</Link></li>
                    <li><Link to="/addservice"><i class="fas fa-plus"></i>Add Service</Link></li>
                    <li><Link to="/makeadmin"><i class="fas fa-user"></i>Make Admin</Link></li>
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

export default AdminSidebar;