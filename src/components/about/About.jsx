import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import Res from "../../assets/res2.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {AiFillFolderOpen} from "react-icons/ai"
import CTA from '../header/CTA'
// import Resume from './resume'

const About = () => {
  return (
    <div className='section' id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
    

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-image" className = "image2" />
          </div>
        </div>
        
      <div className="about__content">
      <p style = {{color : "RED"}}>class <span style = {{color : "yellow"}}>About</span> {" {"}</p>
              <p style = {{opacity : '45%'}}><span style = {{opacity : '35%'}}>{". . "}</span>{"// I did this, because i can"}</p>
              <p><span style = {{opacity : '35%'}}>{". . "}</span><span style = {{color : "Blue", opacity : '250%'}}>constructor</span>{"() "}{"{ "}</p>
              <p><span style = {{opacity : '35%'}}>{". . . . "}</span><span style = {{color : '#fa0a52'}}>{"this"}</span>{"."} <span style = {{color : "#05f772"}}>{"name"}</span>={" 'Shiva'"}</p>
              <p><span style = {{opacity : '35%'}}>{". . . . "}</span><span style = {{color : '#fa0a52'}}>{"this"}</span>{"."} <span style = {{color : "#05f772"}}>{"nickName"}</span>={" 'Evans'"}</p>
              
              <p><span style = {{opacity : '35%'}}>{". . "}</span>{"}"}</p>
              {/* #149414 */}
              <p><span style = {{opacity : '35%'}}>{". . "}</span><span style = {{color : "yellow"}}>education</span>{"() {"}</p>
              <p><span style = {{opacity : '35%'}}>{". . "}</span><span style = {{color : "Blue", opacity : '250%'}}>return</span>{" ["}</p>
              <p><span style = {{opacity : '35%'}}>{". . . . . . "}</span>{"{ "} <span style = {{color : "#24E33A"}}>{'2020-present'}</span>{':'} <span style = {{color : "#24E33A"}}>{"Bachelor of Technology : Computer Science (Artificial Intelligence"}</span>{"}"}</p>
              <p><span style = {{opacity : '35%'}}>{". . . . . . "}</span>{"{ "} <span style = {{color : "#24E33A"}}>{'2018-2019'}</span>{':'} <span style = {{color : "#24E33A"}}>{"Intermediate : Computer Science (Artificial Intelligence"}</span>{"}"}</p>
              <p><span style = {{opacity : '35%'}}>{". . . . "}</span>{"]"}</p>
              <p><span style = {{opacity : '35%'}}>{". . "}</span>{"}"}</p>

              <p><span style = {{opacity : '35%'}}>{". . "}</span><span style = {{color : "yellow"}}>experience</span>{"() {"}</p>
              
                <p><span style = {{opacity : '35%'}}>{". . . . "}</span><span style = {{color : "Blue"}}>return</span>{"("} <p>
                <p style = {{color : "#24E33A"}}><span style = {{opacity : '35%'}}>{". . . . . . "}</span> I have experience working in fullstack development with JS, Python and their libraries</p>
                <p style = {{color : "#24E33A"}}><span style = {{opacity : '35%'}}>{". . . . . . "}</span> and I've worked on a range of projects in both academic and professional settings. </p>
                </p><span style = {{opacity : '35%'}}>{". . . . "}</span>{")"}</p>
              
              
              <p><span style = {{opacity : '35%'}}>{". . "}</span><span style = {{color : "yellow"}}>interests</span>{"() {"}</p>
              <p><span style = {{opacity : '35%'}}>{". . . . "}</span><span style = {{color : "Blue"}}>return</span>{"("}</p>
              <p><span style = {{opacity : '35%'}}>{". . . . . . "}</span><span style = {{color : "#24E33A"}}>* I enjoy to learn new technologies and contributing to open-source projects</span></p>
              <p><span style = {{opacity : '35%'}}>{". . . . . . "}</span><span style = {{color : "#24E33A"}}>* I also like to write blogs on the trending and emerging technologies</span></p>
              <p><span style = {{opacity : '35%'}}>{". . . . "}</span>{")"}</p>
              <p><span style = {{opacity : '35%'}}>{". . "}</span>{"}"}</p>
              <p style = {{color : "re"}}>{"}"}</p>
              <CTA />
      </div>
      
      </div>
      
    </div>
  )
}

export default About



