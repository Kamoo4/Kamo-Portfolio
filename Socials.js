import React from 'react'
import LinkedIn from '../../Assets/LinkedIn.png'
import GitHub from '../../Assets/GitHub.png'
import SocialsStyles from './Socials-Styles.css'

//exports a component with a title and social icon buttons
const Socials = () => {
    return (
        <div className="socials-main-section">
            <div className="title"> <h2>Social Networks</h2></div>
            <div className="icons">
                <div className="icon">
                    <a href="https://www.linkedin.com/in/kamogelo-moloto-5a778418a">
                        <img src={LinkedIn} alt="linkedin"/>
                    </a>
                </div>
                <div className="icon">
                    <a href="https://github.com/Kamoo4">
                        <img src={GitHub} alt="linkedin"/>
                    </a>
                </div>
            </div>
            
            
           
        </div>
    )
}

export default Socials
