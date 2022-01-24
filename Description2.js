import React from 'react'
import MernStack from '../../Assets/MernStack.png'
import DescriptionStyles from './Description2-Styles.css'

//exports a component with a description/title and an image
const Description2 = () => {
    return (
        <div className="main-section" id="description-main-section">
           <div className="description-left" >
                <div className="description-text">
               <h1>Technology is a continuous learning industry and I am looking to always learn and grow my knowlegde while contributing with my own acquired knowlegde <br/> I enjoy implementing technological solutions in order to solve real issues and make people's lives easier and effeciently</h1>
               </div>
           </div>
           <div className="description-right">
               <div className="main-right-image">
               <img src={MernStack} alt="kamogelomoloto"/>
               </div>
           </div>
            
        </div>
    )
}

export default Description2
