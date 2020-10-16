import React, { useContext, useState } from 'react';
import { GlobalVlaue } from '../../GlobalValue/GlobalValue';

const Review = () => {
    const { logedUser } = useContext(GlobalVlaue);
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [review, setReview] = useState('');

    const handaleChange = (e) => {
        if (e.target.name === 'name') setName(e.target.value);
        if (e.target.name === 'company') setCompany(e.target.value);
        if (e.target.name === 'review') setReview(e.target.value);
    }

    const addReview = () => {
        const data = { name: name, company: company, review: review, img: logedUser[0].photoURL }
        console.log(data);
        fetch('https://protected-taiga-89128.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(response => response.json())
            .then(data => {
                alert('Your review added successgullly');
                console.log(data)
            })
            .catch(error => {
                alert('Please fill the form');
                console.error(error)
            })
    }
    return (
        <div style={{
            maxWidth: '60%',
            height: '300px',

        }} className=" ml-5 m-5">
            <input onBlur={handaleChange} type="text" name='name' className="form-control m-3" placeholder="User name" />
            <input onBlur={handaleChange} type="text" name='company' className="form-control m-3" placeholder='Your company name' />

            <textarea onBlur={handaleChange} name='review' className="form-control m-3" placeholder='Desciption' rows='5'></textarea>
            <button onClick={addReview} className='btn btn-lg btn-dark m-3'>Send</button>
        </div>
    );
};

export default Review;