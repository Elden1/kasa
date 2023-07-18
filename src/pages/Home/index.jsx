import React from "react"
import Card from "../../components/Cards"
import { housing } from "../../housing.js"
import banner from "./assets/IMG.png"
import "./assets/Home.scss"


function App() {
  return <section className="main-container">
    <div className="banner-homePage">  <h1>Chez vous, partout et ailleurs</h1>
      <div className="img-background">
          <img 
            src={banner}
            alt="bannière de fôret" />
      </div>
      </div>
    <ul id="cards-container">
            {housing.map((housing, index) => 
            (
                    <Card 
                    key={housing.id}
                    index= {index}
                    href= {'/form-housing/' + housing.id}
                    cover={housing.cover} 
                    title={housing.title}/>
            ))}
    </ul>
  </section>
}

export default App