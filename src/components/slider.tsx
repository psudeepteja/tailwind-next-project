/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function PauseOnHover() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 768, // Adjust this breakpoint according to your design
              settings: {
                slidesToShow: 1, // Show only 1 slide on smaller screens
                slidesToScroll: 1,
              },
            },
          ],
          swipeToSlide: true, // Enable swipe gestures on mobile
          touchMove: true, // Enable touch gestures
     
      };
    
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f39cd50df3682fa7.jpg?q=20" alt="flipkart"/> 
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/11cd504bbc3a1493.jpg?q=20" alt="filpkart"/>
        </div>
        <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f39cd50df3682fa7.jpg?q=20" alt="flipkart"/> 
        </div>
        <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/11cd504bbc3a1493.jpg?q=20" alt="filpkart"/>
        </div>
        <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/11cd504bbc3a1493.jpg?q=20" alt="filpkart"/>
        </div>
        <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f39cd50df3682fa7.jpg?q=20" alt="flipkart"/> 
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
