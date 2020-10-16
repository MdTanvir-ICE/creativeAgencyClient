import React, { useState } from 'react';
import './App.css';
import Login from './Component/Login/Login';
import Makeadmin from './Component/Admin/Makeadmin/Makeadmin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GlobalValueProvider from './Component/GlobalValue/GlobalValue';
import Home from './Component/Home/Home/Home'
import AdminOrUser from './Component/AdminOrUser/AdminOrUser';
import AdminServicesList from './Component/Admin/ServicesList/ServicesList';
import Addservice from './Component/Admin/Addsevice/Addservice';
import AdminSidebar from './Component/Admin/AdminSideBar/AdminSidebar';
import CustomerSidebar from './Component/Customer/CustomerSideBar/CustomerSideBar';
import Service from './Component/Home/Service/Service';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';


function App() {

  return (
    <GlobalValueProvider >

      <Router>
        <Switch>
          <Route exact path="/">
            <Home   ></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/useroradmin">
            <AdminOrUser></AdminOrUser>
          </PrivateRoute>
          <Route path="/servicelist">
            <AdminSidebar go='0'></AdminSidebar>
          </Route>
          <Route path="/makeadmin">
            <AdminSidebar go='2'></AdminSidebar>
          </Route>
          <Route path="/addservice">
            <AdminSidebar go='1'></AdminSidebar>
          </Route>

          <Route path="/order">
            <CustomerSidebar go='0'></CustomerSidebar>
          </Route>
          <Route path="/buyproduct">
            <CustomerSidebar go='1'></CustomerSidebar>
          </Route>
          <Route path="/review">
            <CustomerSidebar go='2'></CustomerSidebar>

          </Route>
          <Route path="/bal">
            <Service></Service>

          </Route>



        </Switch>
      </Router>
    </GlobalValueProvider>

  );
}

export default App;

