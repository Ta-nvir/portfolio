import React from 'react'
import './Certification.css';

function Certification() {
  return (
    <div className='certification' id='Certification'>
      <div className='certification-name'>
        <h1>Certifications</h1>
      </div>
      <div className='container-1'>
        <div className='container-2'>
          <div>
            <p>Full Stack Developer</p>
            <h1>Ameyya institution (offline) - 2025</h1>
            <a href='/public/Certificates/Certificate1/Fullstack1.jpg'>View Certificate</a>
          </div>
          <div>
            <p>Web Developer Bootcamp</p>
            <h1>Udemy (online) - 2025</h1>
            <a href='/public/Certificates/udemy.jpg'>View Certificate</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certification
