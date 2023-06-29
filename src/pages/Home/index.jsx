import Card from "../../components/Cards"
import banner from "./assets/IMG.png"
import "./assets/Home.scss"

function App() {
  return <section>
    <div className="banner">  <h1>Chez vous, partout et ailleurs</h1>
      <div className="img-background">
          <img 
            src={banner}
            alt="bannière de fôret" />
      </div>
      </div>
    <div id="cards-container">
    <Card />
    </div>
  </section>
}

export default App