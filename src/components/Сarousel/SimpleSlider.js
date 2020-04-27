import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: this.props.index

    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.photos.map(photo => <div key={photo.id}> <img src={photo.url} alt={photo.title} /></div>
          )}
        </Slider>
      </div>
    );
  }
}