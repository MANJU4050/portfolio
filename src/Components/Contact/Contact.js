import React, { useState } from 'react'
import './Contact.css'
import mobile from '../Assets/Images/Contact/mobile.png'
import email from '../Assets/Images/Contact/email.png'
import {Link} from 'react-router-dom'

const Contact = () => {

    const [date,setDate] = useState(new Date().getFullYear())
  return (
    <div className='contact'>
        <h2>CONTACT ME</h2>
        <div className='contactitems'>

          <div className='contactitem'>
          <img className='contactimg' src={email} alt="" />
          <h3>makzink40@gmail.com</h3>
          </div>

          <div className='contactitem'>
          <img className='contactimg' src={mobile} alt="" />
          <h3>7034284050</h3>
          </div>
        </div>
        <div className='footer'>
            <div className='footeritems'>
                <div className='socialmedia'>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>LinkedIN</p>
                </div>
                <div className='copyright'>
                ©{date} Manjunath K
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact