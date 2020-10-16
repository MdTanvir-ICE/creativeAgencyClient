import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-5 pt-5">
                        <h1>Let us handle your project professionally</h1>
                        <small>With well writen code, we build amazing apps for all platforms mobaile and web apps in general</small>
                    </div>
                    <div className="col-md-7 pt-5">
                        <div class="input-group input-group-lg">
                            <input type="text" className="form-control" aria-label="Large" placeholder='Your Email Address' aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <br />
                        <div class="input-group input-group-lg">
                            <input type="text" className="form-control" placeholder='Your name company name' aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <br />
                        <div class="input-group input-group-lg text-area">
                            <textarea placeholder='Your message' type="text" className="form-control"></textarea>
                        </div>
                        <br />
                    </div>
                    <button type="button" class="btn btn-dark">Send</button>
                </div>
            </div>
            <div className='text-center pt-5 mt-5'>
    <small>copy right orange labs 2020</small>
            </div>

        </footer>
    );
};

export default Footer;