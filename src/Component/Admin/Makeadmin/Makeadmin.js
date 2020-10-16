import React, { useState } from 'react';

const Makeadmin = () => {
    const [email,setEmail] =useState('');

    const adminEmain = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
        console.log(email);

    }

    const addAdmin = () =>{
        const emai1=email;
        console.log(emai1);
        alert('Admin email save successfully');
        fetch('https://protected-taiga-89128.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:emai1})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div style={{
            maxWidth:'60%',
            height:'300px',
            backgroundColor: 'white',
            zIndex:'-11'
        }} className=" ml-5 m-5">
            <div class="input-group mb-3">
                <input type="text" class="form-control mt-5 ml-5" onBlur={adminEmain} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <span class="input-group-text mt-5 mr-5" id="basic-addon2" onClick={addAdmin}>Submit</span>
                </div>
            </div>

        </div>
    );
};

export default Makeadmin;