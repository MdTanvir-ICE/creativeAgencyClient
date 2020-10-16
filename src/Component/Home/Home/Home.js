import React from 'react';
import CompleteWork from '../CompleteWork/CompleteWork';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import ServiceHolder from '../ServiceHolderCompany/ServiceHolder';

const Home = (props) => {
    return (
        <div>
            <Header></Header>
            <ServiceHolder></ServiceHolder>
            <Service setEventName={props.setEventName} ></Service>
            <CompleteWork></CompleteWork>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;