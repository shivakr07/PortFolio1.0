import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar11.png"
import AVTR2 from "../../assets/avatar22.png"
import AVTR3 from "../../assets/avatar33.jpg"



// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const link1 = "https://iwriteblogs.hashnode.dev/how-to-setup-your-first-server"
const link2 = "https://iwriteblogs.hashnode.dev/rest-apis-a-beginners-guide"
const link3 = "https://thetechnopaths.blogspot.com/2023/04/pixels-to-perception-lets-decode-brain.html"




const data = [
  {
    avatar: AVTR3,
    name: "Let's decode the brain of AI",
    review: "A neural network consist of layers of interconnected processing units or neurons , each neuron receives the input from other neurons, process that input and produces an output that is fed forward to the next layer  of neurons .This process continue until the output of the final layer is produced , which represents the networks prediction and output. read more ...",
    link : link3
  },
  {
    avatar: AVTR1,
    name: `How to setup your first Server 🌧️`,
    review : `
    a server can be a hardware or a computer program( software ) that provides service to the other machine or the program. when there is a single program(process) running on a machine and serving to other enities on the internet then whole machine is treated as a server and there might be case that , there is a machine in which multiple processes are running in parallel , then that time we talk about servers as a software  read more...`,
    link : link1
  },
  {
    avatar: AVTR2,
    name : `Rest API's`,
    review: "REST APIs are a way of building web services that use standard web protocols like HTTP to enable communication between systems. REST is an architectural style that defines a set of constraints that should be followed when designing web services.RESTful APIs use HTTP methods (GET, POST, PUT, DELETE) to interact with resources. Each resource is identified by a Uniform Resource Identifier (URI). RESTful APIs read more ...",
    link : link2
  }
  
]

const Testimonials = () => {
  return (
    <div className='section' id='tesimonials'>
      <h5>I Write Blog</h5>
      <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
    // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
        data.map(({avatar, name, review, link}, index) => {
          return(
          <SwiperSlide key= {index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt ="" />
            </div>  
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review} </small>
              <a  style = {{fontSize : '12px'}} href= {link} target = "_blank">{link} </a>
        </SwiperSlide>
          )
        })
      }
    </Swiper>
    </div>
  )
}

export default Testimonials;

