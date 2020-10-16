import React, { useContext, useEffect, useState } from 'react';
import { GlobalVlaue } from '../../GlobalValue/GlobalValue';
import logo from '../../images/customer-1.png'

const CustomerServiceList = (props) => {
    const [data, setData] = useState([]);
    const { logedUser } = useContext(GlobalVlaue);

    useEffect(() => {
        const email = logedUser[0].email;
        console.log(email);
        fetch(`https://protected-taiga-89128.herokuapp.com/user/${email}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <div className='m-3'>
            <div className='row d-flex justify-content-around'>

                {
                    data.map(data => {
                        return (
                            <div className="col-md-4 m-3" style={{ backgroundColor: 'white' }}>
                                <div className='d-flex justify-content-around'>
                                    <div>
                                        <img className='mt-3 mr-5' style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={`data:image/png;base64,${data.image.img}`} alt="" />
                                    </div>
                                    <div>
                                        <p style={{ width: '80px', backgroundColor: 'red', border: '1px solid white' }} className="mt-4 ml-5 text-center ">{data.status}</p>
                                    </div>
                                </div>
                                <h4>{data.project}</h4>
                                <p> <small>{data.about}</small></p>
                            </div>

                        )
                    })
                }



            </div>

        </div>
    );
};

export default CustomerServiceList;