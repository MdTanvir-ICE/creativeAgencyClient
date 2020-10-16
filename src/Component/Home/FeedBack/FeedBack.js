import React, { useEffect, useState } from 'react';
import './FeedBack.css'
import img from '../../images/customer-1.png'
const FeedBack = () => {
    const [data, setData] = useState([]);

    
    useEffect(() => {
        fetch('https://protected-taiga-89128.herokuapp.com/allReview')
            .then(res => res.json())
            .then(data =>{
                setData(data);
            })
    }, [])

    return (
        <div className='container'>
            <div className='text-center'>
                <h3>Clients <span style={{ color: '#7ab259' }}>Feedback</span></h3>
            </div>
            <div className="row d-flex justify-content-around ">
                {
                    data.map(data => {
                        return (
                            <div className="col-md-3 feebBack-card m-2 ">
                                <div className="feedBack-card-body p-3">
                                    <div className='d-flex'>
                                        <div>
                                            <img style={{borderRadius:'50%'}} className="mr-2" src={data.img} alt="" />
                                        </div>
                                        <div>
                                            <h5>{data.name}</h5>
                                            <h6><small>{data.company}</small></h6>
                                        </div>
                                    </div>
                                    <p>{data.review}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default FeedBack;