import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Caursolitem from './Caursolitem';
import { tablets } from './tablets';

function Tablets() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false

      };

  return (
    <div className='overflow:hidden'>
    <Slider {...settings}>
          {tablets.map((item)=>(
              <Caursolitem image={item.image} title={item.title} />
          ))}
    </Slider>

    
  </div>
  )
}

export default Tablets;
