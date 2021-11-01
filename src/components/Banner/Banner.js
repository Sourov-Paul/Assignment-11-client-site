import React from 'react';
import './Banner.css'
import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <div>
            <div className="main_banner">
              
            <div className="banner_title">
                <div className="main_title">
                   <h2 className="welcome">
                       <Typewriter
                       options={{
                          autoStart:true,
                          loop:true,
                          delay:40,
                          strings:[
                              "Welcome to Online Product Delivery ",
                             " Best Courier Service for Our Customar",
                              "Online Product Delivery & How They Work",
                              "Happy Customar"
                          ]
                       }}
                       />
                   

                   </h2>
                   <p> People need good service from a courier service company. They prefer to get the fastest delivery with full protection of their product. To get these facilities, one can rely on Delivery Tiger, the best and trusted courier service for e-commerce. Value for money and...</p>
                    <div className="btns">
                </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Banner;

