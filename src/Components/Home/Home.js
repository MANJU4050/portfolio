import React from 'react'
import './Home.css';
import manju from  '../Assets/Images/Home/MANJUNATH.jpg'
import physics from '../Assets/Images/Home/physics.png'
import nodejs from '../Assets/Images/Home/nodejs.png'
import js from '../Assets/Images/Home/js.png'

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className='manjunath'>
            <p>Hello, I am <br/> Manjunath</p>
        </div>

        <div className='job'>
          <p>WEB DEVELOPER</p>
          
          </div>
          <div className='manju'>
            <img className='manjuimg'  src={manju} alt="" />
          </div>

          <div className='physics'>
            <img className='physicsimg' src={physics} alt="" />
          </div>
          <div className='js'>
            <img className='jsimg' src={js} alt=""  />
          </div>
          <div className='nodejs'>
            <img className='nodejsimg' src={nodejs} alt="" />
          </div>
          <div className='msg'>
    <p>This is site is in development stage</p>
</div>

    </div>
  )
}

export default Home