import React from 'react';
import './Skills.css';
import reactjs from '../Assets/Images/Skills/react.png'
import nodejs from '../Assets/Images/Skills/nodejs.png'
import js from '../Assets/Images/Skills/js.png'
import mongo from '../Assets/Images/Skills/mongo.png'
import mysql from '../Assets/Images/Skills/mysql.png'
import bootstrap from '../Assets/Images/Skills/bootstrap.png'
import html from '../Assets/Images/Skills/html.png'
import css from '../Assets/Images/Skills/css.png'

const Skills = () => {
  return (
    <div className='skills'>
        <h2>SKILLS</h2>
        <div className='techskill'>

            <div className='skillitem'>
                <img className='skillimg' src={reactjs} alt="" />
                <div className='skillname'>
                    <h3>React Js</h3>
                </div>
            </div>

            <div className='skillitem'>
                <img className='skillimg' src={nodejs} alt="" />
                <div className='skillname'>
                    <h3>Node Js</h3>
                </div>
            </div>

            <div className='skillitem'>
                <img className='skillimg' src={mongo} alt="" />
                <div className='skillname'>
                    <h3>mongoDB</h3>
                </div>
            </div>

            <div className='skillitem'>
                <img className='skillimg' src={mysql} alt="" />
                <div className='skillname'>
                    <h3>MySQL</h3>
                </div>
            </div>

            <div className='skillitem'>
                <img className='skillimg' src={js} alt="" />
                <div className='skillname'>
                    <h3>Javascript</h3>
                </div>
            </div>

            <div className='skillitem'>
                <img className='skillimg' src={html} alt="" />
                <div className='skillname'>
                    <h3>HTML</h3>
                </div>
            </div>

            <div className='skillitem'>
                <img className='skillimg' src={css} alt="" />
                <div className='skillname'>
                    <h3>CSS 3</h3>
                </div>
            </div>

            <div className='skillitem'>
                <img className='skillimg' src={bootstrap} alt="" />
                <div className='skillname'>
                    <h3>Bootstrap</h3>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Skills