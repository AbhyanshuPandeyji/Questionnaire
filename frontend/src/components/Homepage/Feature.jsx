import React from 'react'
import Slider from 'react-slick';

const Feature = () => {
 const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className='h-[100vh] slider-container'>
      <Slider {...settings}>
        <div className='h-[80vh] bg-red-400'>
          <h3>1</h3>
        </div>
        <div className='h-[80vh] bg-blue-400'>
          <h3>2</h3>
        </div>
        <div className='h-[80vh] bg-green-400'>
          <h3>3</h3>
        </div>
        <div className='h-[80vh] bg-yellow-400'>
          <h3>4</h3>
        </div>
        <div className='h-[80vh] bg-orange-400'>
          <h3>5</h3>
        </div>
        <div className='h-[80vh] bg-violet-400'>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}



export default Feature