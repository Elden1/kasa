import React, { useState } from "react";
import './assets/collapsible.scss'
import arrow from './assets/arrow_back_ios-24pxpng.png'


const Collapsible = (props) =>{
     
    const [open, setOPen] = useState(false);

    return(
            <div className="intel-cat">
                <button onClick={() => setOPen(!open)} className="collaps-btn"><h2>{props.label}</h2><img src={arrow} alt="flèche" /> </button> 
                    {open && 
                    <div className="toggled"><p>{props.content}</p>
                    </div>}
            </div>                
        )}
export default Collapsible