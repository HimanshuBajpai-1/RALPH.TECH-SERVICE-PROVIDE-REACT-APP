import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import avialable from '../assets/avialable.jpg';
import service from '../assets/service.jpg';
import techProblem from '../assets/tech-problem.jpg';

const Services = () => {
  return (
      <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000} >
        <div >
            <img src={techProblem} alt={"tech-img"} />
            <p className="legend" >Solution of all Tech. Problems</p>
        </div>
        <div>
            <img src={avialable} alt={"avialablilty"} style={{marginBottom:"80px"}}/>
            <p className="legend" >always available</p>
        </div>
        <div>
            <img src={service} alt={"service-img"} />
            <p className="legend" >Quick Service</p>
        </div>
      </Carousel>
    
  )
}

export default Services