import React, { useContext, useState } from 'react';
import logo from '../images/logos/logo.png'
import google from '../Images1/logos/google.png'
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { GlobalVlaue } from '../GlobalValue/GlobalValue';

const Login = () => {

    const { logedUser, adminControl } = useContext(GlobalVlaue);

    console.log(logedUser, adminControl);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const isAdmin = (email) => {

        fetch(`https://protected-taiga-89128.herokuapp.com/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    adminControl[1](true);
                }
            })

    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            isAdmin(email);
            console.log(result);
            const signedInUser = { name: displayName, email, photoURL }
            console.log(signedInUser);
            logedUser[1](signedInUser);
            console.log(result, logedUser[0]);
            history.replace(from);

        })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    return (
        <div className="container login">
            <img src={logo} alt="" />
            <div className="loginBody">
                <h5>Login with</h5>
                <button className='btn' onClick={handleGoogleSignIn}><img src={google} alt="" />Continue with google</button>
                <p>Don't have an account?<Link to="">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;