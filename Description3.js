import React from 'react'
import Sovtech from '../../Assets/Sovtech.png'
import DescriptionStyles from './Description3-Styles.css'

//exports a component with a description/title and an image
const Description3 = () => {
    return (
        <div className="main-section" id="description-main-section">
           <div className="description-left" >
                <div className="description-text">
               <h1>Going through SovTech's page <a href='https://www.sovtech.co.za/'>SovTech</a> I liked what SovTech as a company stands for and is doing as a company. I would be happy to be a part of a company which is technology driven</h1>
               </div>
           </div>
           <div className="description-right">
               <div className="main-right-image">
               <img src={Sovtech} alt="greg"/>
               </div>
           </div>
            
        </div>
    )
}

export default Description3
