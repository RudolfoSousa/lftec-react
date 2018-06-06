import React, { Component } from 'react';
import Swiper from 'swiper';

class Slider extends Component{
  render() {

    return(

      <div className="swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div>
    </div>

    );

    var mySwiper = new Swiper('.swiper-container', { direction: 'vertical', });

  }

}

export default Slider;
