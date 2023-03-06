import Carousel from 'react-multi-carousel';
import React from 'react'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slide = () => {
  return (
    <Carousel
    responsive={responsive}>

    </Carousel>
  )
}

export default Slide