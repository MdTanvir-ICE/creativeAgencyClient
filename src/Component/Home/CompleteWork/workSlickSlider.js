import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../images/carousel-1.png'
import img1 from '../../images/carousel-2.png'
import './CompleteWork.css'

export default function WorkSlickSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,   
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
   
    return (
        <div className='container work-slider'>
            <Slider className='row' {...settings}>

                <div className='items col' >

                    <img src={img1} alt="" />
                </div>
                <div className='items col' >

                    <img  src={img} alt="" />
                </div>
                <div className='items col' >

                    <img  src={img1} alt="" />
                </div>
                <div className='items col'>

                    <img  src={img} alt="" />
                </div>
                <div className='items col'>

                    <img  src={img1} alt="" />
                </div>
                <div className='items col '>
                    <img  src={img} alt="" />
                </div>

            </Slider >
        </div>

    );
}