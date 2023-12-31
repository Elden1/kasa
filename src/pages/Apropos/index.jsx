import React from "react";
import { intelContent } from "../../intel.js";
import banner from "./assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import Collapsible from "../../components/collapsible"
import './assets/Apropos.scss'
import '../Home/assets/Home.scss'

function Aprop() {
    return (
    <section className="main-container">
            <div className="banner-AproposPage"> 
                <div className="img-background">
                    <img 
                            src={banner}
                            alt="bannière de fôret" />
                </div>
            </div>
            <article id="intel">
            {intelContent.map((intelContent) => 
            (
                    <Collapsible
                    key={intelContent.title} 
                    label={intelContent.title} 
                    content={intelContent.content}/>
            ))}
            </article>
        </section>
    )
  }
  
  export default Aprop