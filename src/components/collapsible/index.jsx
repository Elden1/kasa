import React, { useState } from "react";
import vector from './assets/VectorUp.png'
import  './assets/animations.scss'
import './assets/collapsible.scss'

const Collapsible = (props) =>{
    const [isOpen, setOpen] = useState(false);
    let [isClicked, setClicked] = useState(0)

    const vectorOpen = {
        animation:"openAnim 1s 1",
        animationFillMode: "forwards"
    }

    const vectorDown = {
        animation:"closeAnim 1s 1"
    }

    let handler = () => {
        setClicked(isClicked+1)
        setOpen(!isOpen)
    }       
    
    return(
            <div className="collapsCat">
                <button key={props.id} 
                        onClick={() => handler()}
                        className="collaps-btn"
                        open={isOpen}>
                        <h2>{props.label}</h2>

                            <img
                            className= "vector"
                            src={vector}
                            alt="flèche" 
                            style= {isClicked === 0 ?  {animation: 'none'} : isOpen ? vectorOpen : vectorDown} /> 
                            
                </button> 

                {isOpen && 
                <div className="toggled">
                    <p>{props.content}</p>
                </div>}
            </div>                
        )}
export default Collapsible