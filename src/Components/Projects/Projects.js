import React from 'react'
import './Projects.css';
import {Link} from 'react-router-dom'
import productsify from '../Assets/Images/Projects/productsify.png'
import notesify from '../Assets/Images/Projects/notesify.png'
import expensetracker from '../Assets/Images/Projects/expensetracker.png'

const Projects = () => {
  return (
    <div className='projects'>

        <h2>PROJECTS</h2>
        <div className='project'>
            <div className='projectitem'>
                <img className='productsifyimg' src={productsify} alt="" />
                <div className='projectdescription'>
                    <h3>
                        Productsify
                    </h3>
                    <p>
                        Productsify is a product management app.The frontend of the app 
                        was built using React.The backend of the app was built using Node 
                        using Express framework.MongoDB was used as database.The app also 
                        features authentication using JWT.
                    </p>
                </div>
                <div className='links'>
                    <button  className='projectlink'>View</button>
                    <button className='projectcode'>Code</button>
                </div>
            </div>

            <div className='projectitem'>
                <img className='productsifyimg' src={notesify} alt="" />
                <div className='projectdescription'>
                    <h3>
                        Notesify
                    </h3>
                    <p>
                        Notesify is notes keeping app.The app was built 
                        using react.Users can add a title and note.The 
                        notes will be saved along with the date it was created.
                        Users can also delete the notes if they want to.
                    </p>
                </div>
                <div className='links'>
                    <button className='projectlink'>View</button>
                    <button className='projectcode'>Code</button>
                </div>
            </div>

            <div className='projectitem'>
                <img className='productsifyimg' src={expensetracker} alt="" />
                <div className='projectdescription'>
                    <h3>
                        Expense Tracker
                    </h3>
                    <p>
                        Expense tracker is an app where users can track their expense.
                        The app was built using React.Users can add title, amount and 
                        date of the expense.Users can also view a chart representing 
                        expense in each months.Also there is filter option which can be 
                        used to filter the expense based on year.
                    </p>
                </div>
                <div className='links'>
                    <button className='projectlink'>View</button>
                    <button className='projectcode'>Code</button>
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default Projects