import React, { useState } from "react";
import arrow from '../../collapsible/assets/VectorUp.png'
import  '../../collapsible/assets/animations.scss'
import  '../../collapsible/assets/collapsible.scss'
import './assets/EquipmentCollaps.scss'

const ListEquip = (props) => {
    return <li className='equipContent'>{props.value}</li>
}

const EquipCollaps = (props) => {

    const [isOpen, setOPen] = useState(false);
    const [isClicked, setClicked] = useState(0)

    const vectorOpen = {
        animation:"openAnim 1s 1",
        animationFillMode: "forwards"
    }

    const vectorDown = {
        animation:"closeAnim 1s 1"
    }

    let handler = () => {
        setClicked(isClicked+1)
        setOPen(!isOpen)
    }  

    const equipContent = props.content

    const equipItems = equipContent?.map((equipContent) => 
    <ListEquip key={equipContent.toString()}
               value= {equipContent}
               />
    )

    return (
    <div className="collapsCat">
        
        <button key={props.id} 
            onClick={() => handler()} 
            className="collaps-btn">
                <h2>{props.label}</h2>
                
                    <img src={arrow} 
                        alt="flèche" 
                        style=  {isClicked===0 ?  {animation: 'none'} : isOpen ? vectorOpen : vectorDown}
                    /> 
        </button> 

            {isOpen && 
                <ul className="equipment-toggled">
                    {equipItems}
                </ul>
}
    </div>  
    )
}

    export default EquipCollaps