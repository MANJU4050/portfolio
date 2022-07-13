import React from 'react'
import './About.css'
import frontend from '../Assets/Images/About/frontend.png'

const About = () => {
  return (
    <div className='about' id='about'>
        <h2>ABOUT ME</h2>
        <div className='aboutitems'>



       

        <div className='aboutitem'>
            <img className="frontendimg" src={frontend} alt="" />
        <div className='frontend'>
           <h2>Backend Developer</h2>
           <p>I am a Backend developer.The technology I am working on is Nodejs</p>
        </div>
        </div>

        <div className='aboutitem'>
            <img className="frontendimg" src={frontend} alt="" />
        <div className='backend'>
           <h2>Frontend Developer</h2>
           <p>I am a Frontend developer having knowledge of ReactJS.</p>
        </div>
        </div>

        <div className='aboutitem'>
            <img className="frontendimg" src={frontend} alt="" />
        <div className='uiux'>
           <h2>Web Designer</h2>
           <p>I am a Web designer with passion for creating beautiful and functional web apps</p>
        </div>
        </div>
        <div className='aboutitem'>
            <img className="frontendimg" src={frontend} alt="" />
        <div className='database'>
           <h2>Database</h2>
           <p>I have some knowledge of database management systems such as MongDB and MySQL</p>
        </div>
        </div>
        
        </div>


    </div>
  )
}

export default About