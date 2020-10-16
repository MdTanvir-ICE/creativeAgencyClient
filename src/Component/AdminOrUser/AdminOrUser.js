import React, { useContext } from 'react';
import AdminSidebar from '../Admin/AdminSideBar/AdminSidebar';
import CustomerSidebar from '../Customer/CustomerSideBar/CustomerSideBar';
import { GlobalVlaue } from '../GlobalValue/GlobalValue';

const AdminOrUser = (props) => {
    const { adminControl } = useContext(GlobalVlaue);

    const p = adminControl[0];
    return (
        <div>
            {
                p ?
                    <AdminSidebar go='0'></AdminSidebar>

                    :
                    <CustomerSidebar go='0'></CustomerSidebar>
            }
        </div>
    );
};

export default AdminOrUser;