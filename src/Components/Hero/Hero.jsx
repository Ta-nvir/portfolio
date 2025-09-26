import React from 'react'
import './Hero.css'
import profile_img from '../../assets/tro3.jpg';

const Hero = () => {
  return (
    <div className='hero' id='Home'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Tanvir Yaligar,</span> Full stack developer | Passionate About Problem-Solving & Scalable Web Apps</h1>
        <div className='links'>
        <a href='https://www.linkedin.com/in/tanvir-yaligar-382785344' target="_blank" 
  rel="noopener noreferrer" 
  className="linkedin-link"><span className='code' style={{color:"skyblue"}}>Linkdin </span> <i className="fa-brands fa-linkedin" style={{color:"skyblue"}}></i></a>
        <a href='whatsapp://send?text=hello world!&phone=+918660283024' target="_blank" 
  rel="noopener noreferrer" 
  className="linkedin-link"><span className='code' style={{color:"green"}}>Phone </span><i className="fa-solid fa-phone" style={{color:"green"}}></i></a>
        <a href='https://mail.google.com/mail/u/1/?hl=en&pli=1#inbox' target="_blank" 
  rel="noopener noreferrer" 
  className="linkedin-link"><span className='code' style={{color:"pink"}}>Mail </span> <i className="fa-solid fa-envelope" style={{color:"pink"}}></i></a>
        <a href='https://github.com/Ta-nvir' target="_blank" 
  rel="noopener noreferrer" 
  className="linkedin-link"><span className='code'>Github </span> <i className="fa-brands fa-github"></i></a>
        </div>
        
        <div className='hero-action'>
           <a className='a-link' offset={50} href='#Contact' style={{textDecoration:"none"}}> <div className='hero-connect'>Connect with Me</div></a>

            <a href='/public/Resume/tanviryaligar.pdf' style={{textDecoration:"none",color:"white"}}><div className='hero-resume'>My resume</div></a>
            </div>     
    </div>
  )
}

export default Hero
