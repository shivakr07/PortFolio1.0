import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Practice from './components/portfolio/practice'
import './App.css'
import './index.css'
const App = () => {
  return (
    <>  
  
        <Header />
        <Nav />
        <About />
        <Portfolio />
        <Practice />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />   
    </>
  )
}

export default App

