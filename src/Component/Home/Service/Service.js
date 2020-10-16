import React, { useContext, useEffect, useState } from 'react';
import './Service.css'
import img from '../../images/icons/service1.png'
import { Link, useHistory } from 'react-router-dom';
import { GlobalVlaue } from '../../GlobalValue/GlobalValue';


const Service = () => {
const [event, setEvent] = useState([]);
const {eventName} =useContext(GlobalVlaue);
  const history = useHistory();

  console.log('ki jhamela');

    useEffect(() => {
        fetch('https://protected-taiga-89128.herokuapp.com/event')
            .then(res => res.json())
            .then(data => {
                setEvent(data);
            })
     }, [])

    const addEvent = (data) =>{
        eventName[1](data.name);
        history.push('/useroradmin')
    }

    return (
        <div >
            <div className='text-center service-card-header '>
                <h3> Provide awesome <span style={{ color: '#7ab259' }}>services</span></h3>
            </div>
            <div className='container text-center service-card-body my-3'>
                <div className='row d-flex justify-content-around'>
                    {
                        event.map(data => {
                         return(    
                                <div key={data._id} className='col-md-3 col-6 service-card-detail m-2'onClick={() =>addEvent(data)} >
                                <img className='mt-3' src={`data:image/png;base64,${data.image.img}`} alt="" />
                                <h5>{data.name}</h5>
                                <p className='text-secondary'><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, accusantium?</small></p>
                            </div>
                             
                         )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Service;