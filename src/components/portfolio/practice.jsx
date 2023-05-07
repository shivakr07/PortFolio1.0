import React from 'react'
import "./practice.css"
import img1 from '../../assets/node-js.png'
import img2 from '../../assets/expressjs.png'
import img3 from '../../assets/cloud-data.png'
import img4 from '../../assets/atom.png'
import img6 from '../../assets/html.png'
import img5 from '../../assets/css-3.png'
import img7 from '../../assets/mysql.png'
import img8 from '../../assets/bootstrap.png'
import imga from '../../assets/js.png'
import imgb from '../../assets/c++.png'
import imgc from '../../assets/letter-c.png'
import imgd from '../../assets/Git.png'
import imge from '../../assets/github.gif'
import imgf from '../../assets/tensorflow.png'
import imgg from '../../assets/python.png'
import imgh from '../../assets/connection.png'

const Experience = () => {
  return (
    <div className='section' id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend &nbsp;+ &nbsp;  Backend </h3>
          <div className="experience__content">
         
              <div className='techn'>
                <img  className='pic' src={img1}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; node JS</small>
              </div>
              
              <div className='techn'>
                <img  className='pic' src={img2}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp; Express JS</small>
              </div>
              
              <div className='techn'>
                <img  className='pic' src={img3}/>
                <small>&nbsp; &nbsp;Mongo DB</small>
              </div>
              <div className='techn'>
                <img  className='pic' src={img4}/>
                <small>&nbsp; &nbsp;&nbsp; React JS</small>
              </div>
         
              <div className='techn'>
                <img  className='pic' src={img6}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; html5</small>
              </div>
              
              <div className='techn'>
                <img  className='pic' src={img5}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CSS3</small>
              </div>
              
              <div className='techn'>
                <img  className='pic' src={img7}/>
                <small>&nbsp; &nbsp;&nbsp; &nbsp;My SQL</small>
              </div>
              <div className='techn'>
                <img  className='pic' src={img8}/>
                <small>&nbsp; &nbsp;Bootstrap</small>
              </div>
          </div>

        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Other Skills</h3>
          <div className="experience__content">
              <div className='techn'>
                <img  className='pic' src={imga}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Javascript</small>
              </div>
              
              <div className='techn'>
                <img  className='pic' src={imgb}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C++</small>
              </div>
              
              <div className='techn'>
                <img  className='pic' src={imgc}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C Lang.</small>
              </div>
              <div className='techn'>
                <img  className='pic' src={imgd}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Git</small>
              </div>
              <div className='techn'>
                <img  className='pic' src={imge}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Github</small>
              </div>
              
              <div className='techn'>
                <img  className='pic' src={imgf}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tensorflow</small>
              </div>
              <div className='techn'>
                <img  className='pic' src={imgg}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Python</small>
              </div>
              <div className='techn'>
                <img  className='pic' src={imgh}/>
                <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Datastructure</small>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience