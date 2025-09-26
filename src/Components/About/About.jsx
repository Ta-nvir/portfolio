import React from 'react'
import './About.css'


const About = () => {
  return (
    <div className='about' id='About'>
      <div className="about-title">
        <h1>About me</h1>

      </div>
      <div className="about-sections">
        <div className="about-left">

        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a passionate Full stack Developer with a BCA background, eager to kickstart my professional journey.
              I specializa in building dynamic and user-friendly web applications using modern technologies
              with knowledge of frontend, backend, and databases, I can create complete end-to-end solutions.
              I am dedicated to continuous learning and growing as a developer while delivering quality results. </p>
          </div>
          <div className='container-dd'>
            <div className="container-tt">
              <h1 style={{ textAlign: "center", marginBottom: "5px" }}>SKILLS</h1>
              <button className="about-skill"><p>HTML & CSS</p></button>
              <button className="about-skill"><p>React JS</p></button>
              <button className="about-skill"><p>JavaScript</p></button>
              <button className="about-skill"><p>Node JS</p></button>
              <button className="about-skill"><p>Express JS</p></button>
              <button className="about-skill"><p>MySQL</p></button>
              <button className="about-skill"><p>MangoDB</p></button>
            </div>
          </div>

        </div>
      </div>
      <div className="about-achievements">

        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />

      </div>
    </div>
  )
}

export default About
