import React from 'react'
import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsTwitter} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import {FaLinkedin} from "react-icons/fa"
import { useRef } from 'react';
import emailjs from "emailjs-com"



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( 'service_xj9u6mn', 'template_zhxz77m', form.current, 'wIx26ZQilQdaMXsz7')
    e.target.reset()
      .then((result) => { 
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section className='section' id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className ="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <p>Email</p>
            <p className = "small__mail">kumarshiva0707@gmail.com</p>
            <a href="mailto:kumarshiva0707@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsTwitter className='contact__option-icon'/>
            <p>Twitter</p>
            <p>@_Shiva_m</p>
            <a href="https://twitter.com/_Shiva_m" target="_blank">Follow Me</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <p>WhatsApp</p>
            <p>+91 9369637611</p>
            <a href="https://api.whatsapp.com/send?phone=+919369637611" target="_blank">Send a message</a>
          </article>

            <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
            <p>LinkedIn</p>
            <p>@shivakumar07</p>
            <a href="https://www.linkedin.com/in/shivakumar07/" target="_blank">Let's Connect</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit ={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="9" placeholder='Your Message' required></textarea>
          <button type = "submit" className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact