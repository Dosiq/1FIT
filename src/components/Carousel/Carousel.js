import React, { Component } from "react";
import Slider from "react-slick";
import styles from './Carousel.css'
import Card from './Card'
import next from './next.png'
import prev from './prev.png'

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      arrows: false,

    };

    return (
      <div className="Carousel_block">

        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1} className='Carousel_block_block'>
            <Card />
          </div>
          <div key={2} className='Carousel_block_block_margin'>
          <Card />
          </div>
          <div key={3} className='Carousel_block_block'>
          <Card />
          </div>
          <div key={4} className='Carousel_block_block'>
          <Card />
          </div>
          <div key={5} className='Carousel_block_block_margin'>
          <Card />
          </div>
          <div key={6} className='Carousel_block_block'>
          <Card />
          </div>
        </Slider>

        <div className="Carousel_buttons">
          <button className="button1" onClick={this.previous}>
            <img src={prev} className='button1_css'></img>
          </button>
          <button className="button2" onClick={this.next}>
            <img src={next} className='button2_css'></img>
          </button>
        </div>

      </div>
    );
  }
}