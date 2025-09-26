import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='Project' id='Project'>
      <div className='Project-title'>
        <h1>Projects</h1>
      </div>
     <div className='cards'>
      <div className="project-container">
        <div className='project-mywork'>
          <h2>
            1. Home-Appliances
          </h2>
          <p>
           Developed an interactive online platform this system is designed to offer a unified platform where
            users can   monitor,manage and control all their home appliences from a single interface.
            the project leverages modern web development technologies such as Node.js for backend server and React.js vite
             for building a dynamic and interactive frontend MySQL for efficient data storage and retrieval. 
             The system ensures real-time interaction between the client and server.
          </p><br></br>
          <button className='button'>React JS</button>
          <button className='button'>Node JS</button>
          <button className='button'>Express JS</button>
          <button className='button'>MySQL</button><br></br>

<a href='https://github.com/Ta-nvir' target="_blank" 
  rel="noopener noreferrer" 
  className="linkedin-link"><span className='code'>View on Github </span> <i className="fa-brands fa-github"></i></a>        </div>
        </div>
        <div className="project-container">
        <div className='project-mywork'>
          <h2>
            2. Real-Time Tracking System
          </h2>
          <p>
          A real-time tracking system built javascript, node.js, Express, EJS and CSS this project allows 
          users to track locations on live map, updating positions dynamically.<br></br>
          # Features<br></br>
          * Real-time location tracking on a map<br></br>
          * built with Node.js + Express backend<br></br>
          * Socket.io for real-time communication<br></br>
          * scalable and easy to integrate into larger projects<br></br>
          </p><br></br>
          <button className='button'>EJS</button>
          <button className='button'>Node JS</button>
          <button className='button'>Tailwind CSS</button><br></br>
<a href='https://github.com/Ta-nvir' target="_blank" 
  rel="noopener noreferrer" 
  className="linkedin-link"><span className='code'>View on Github </span> <i className="fa-brands fa-github"></i></a>
        </div>
        
        

      </div>
    </div>
    <div className='card'>
    <div className='project-card'>
      <div className='project-mywork'>
        <h2>
          3. To-Do List Application
        </h2>
        <p>To-Do using React.js and MySQL allows users to add,update,view and delete tasks.
          react handles the frontend UI,displaying and interacting with taks dynamically.
          Node.js with Express acts as the backend API server processing requests and connecting to MySQL.
          MySQL stores all the To-Do items in a structured database table. </p><br></br>
          <button className='button'>React JS</button>
          <button className='button'>Node JS</button>
          <button className='button'>MySQL</button><br></br>
        <a href='https://github.com/Ta-nvir' target="_blank" 
  rel="noopener noreferrer" 
  className="linkedin-link"><span className='code'>View on Github </span> <i className="fa-brands fa-github"></i></a>          

      </div>
    </div>
    <div className='project-card'>
      <div className='project-mywork'>
        <h2>
          4. To-Do List Application
        </h2>
        <p>To-Do using React.js and MySQL allows users to add,update,view and delete tasks.
          react handles the frontend UI,displaying and interacting with taks dynamically.
          Node.js with Express acts as the backend API server processing requests and connecting to MySQL.
          MySQL stores all the To-Do items in a structured database table. </p><br></br>
          <button className='button'>React JS</button>
          <button className='button'>Node JS</button>
          <button className='button'>Express JS</button>
          <button className='button'>MangoDB</button><br></br>



<a href='https://github.com/Ta-nvir/To-Do-List-' target="_blank" 
  rel="noopener noreferrer" 
  className="linkedin-link"><span className='code'>View on Github </span> <i className="fa-brands fa-github"></i></a>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Project
