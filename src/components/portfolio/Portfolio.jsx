import React from 'react'
import { motion } from "framer-motion"
import "./portfolio1.css"
import IMGj from "../../assets/colorg.jpg"
import IMG2 from "../../assets/diab.png"
import IMG3 from "../../assets/codeext.png"
import IMG4 from "../../assets/spot.png"
import IMG5 from "../../assets/them.png"
import IMG6 from "../../assets/ayam.gif"
import IMG7 from "../../assets/flights.jpg"
import IMG8 from "../../assets/robo.jpg"
import IMG9 from "../../assets/food.png"
import { staggerContainer } from "../data.js"

const data = [
  {
    id: 1,
    imaage: IMGj,
    title: "Color Grading",
    Github: "https://github.com/kv272/the-T",
    demo: "https://github.com/kv272/the-T"
  },
 
  {
    id: 3,
    imaage: IMG3,
    title: "Chrome Extension",
    Github: "https://github.com/shivakr07/CODE",
    demo: "https://github.com/shivakr07/CODE"
  },
  {
    id: 4,
    imaage: IMG4,
    title: "Spotify Clone ",
    Github: "https://github.com/shivakr07/Spotify-Clone",
    demo: "https://github.com/shivakr07/Spotify-Clone"
  },
  {
    id: 5,
    imaage: IMG5,
    title: "VSCode dark Theme",
    Github: "https://github.com/shivakr07/devstheme",
    demo: "https://marketplace.visualstudio.com/items?itemName=Evans.awesome-vscode-theme"
  },
  {
    id: 6,
    imaage: IMG6,
    title: "Portfolio",
    Github: "https://github.com/shivakr07/",
    demo: "https://github.com/shivakr07/"
  },
  {
    id: 7,
    imaage: IMG7,
    title: "Flight Booking",
    Github: "https://github.com/shivakr07/FlightsSearchandService",
    demo: "https://github.com/shivakr07/FlightsSearchandService"
  },
  {
    id: 8,
    imaage: IMG8,
    title: "Tech Blog",
    Github: "https://github.com/shivakr07/Blog-app",
    demo: "https://github.com/shivakr07/Blog-app"
  },
  {
    id: 9,
    imaage: IMG9,
    title: "Food Delivery",
    Github: "https://github.com/shivakr07/ResponsiveWebsite",
    demo: "https://github.com/shivakr07/ResponsiveWebsite"
  },
  {
    id: 2,
    imaage: IMG2,
    title: "Health App",
    Github: "https://github.com/shivakr07/",
    demo: "https://github.com/shivakr07/"
  }
]

const Portfolio = () => {

  return (
    <motion.div 
    variants = {staggerContainer}
    initial = "hidden"
    whileInView= "show"
    viewport={{once: "false", amount: 1}}
    className='section' 
    id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, imaage, title, Github, demo}) => {
          return (
          <article key={id} className = "portfolio__item">
          <div className="portfolio__item-image">
            <img src={imaage} alt={title} />
          </div>
          <h3>{title} </h3>
          <div className="portfolio__item-cta">
            <a href={Github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
          )
        })
      }
      </div>
    </motion.div>
  )
}

export default Portfolio

