import React, { Component } from "react";
import Image from "next/image";
import { images } from "../../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight,BsArrowLeft } from "react-icons/bs";

export default class Carousel extends Component {
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
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    return (
      <div>
        <Slider {...settings} ref={c => (this.slider = c)}>
            <div>
                <Image src={images.carousel_one}/>
            </div>
            <div>
                <Image src={images.carousel_two}/>
            </div>
            <div>
                <Image src={images.carousel_three}/>
            </div>
            <div>
                <Image src={images.carousel_four}/>
            </div>
            <div>
                <Image src={images.carousel_one}/>
            </div>
            <div>
                <Image src={images.carousel_two}/>
            </div>
            <div>
                <Image src={images.carousel_three}/>
            </div>
            <div>
                <Image src={images.carousel_four}/>
            </div>
        </Slider>
        <div className="flex justify-between mt-10">
          <button className="button" onClick={this.previous}>
            <BsArrowLeft className="border border-black rounded w-[30px] h-[30px]"/>
          </button>
          <button className="button" onClick={this.next}>
          <BsArrowRight className="border border-black rounded w-[30px] h-[30px]"/>
          </button>
        </div>
      </div>
    );
  }
}