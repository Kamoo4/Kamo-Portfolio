import React from 'react'
import UJLogo from '../../Assets/UJLogo.jpg'
import DescriptionStyles from './Description-Styles.css'

//exports a component with a description/title and an image
const Description = () => {
    return (
        <div className="main-section" id="description-main-section">
           <div className="description-left" >
                <div className="description-text">
               <h1>I am an aspiring Software Developer who studied <br/> National Diploma in IT Software Development. <br/> <br/>
               I am a driven individual and very creative, I spend my free time with family and friends.</h1>
               </div>
           </div>
           <div className="description-right">
               <div className="main-right-image">
               <img src={UJLogo} alt="greg"/>
               </div>
           </div>
            
        </div>
    )
}

export default Description
