import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Project from './Components/Projects/Project'
import Certification from './Components/Certifications/Certification'
import Contact from './Components/Contact/Contact'
import './Global.css';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Project/>
      <Certification/>
      <Contact/>
    </div>
    


  )
}

export default App
