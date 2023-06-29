import { housing } from "./housing.js"
import './assets/housing.scss'


function Card() {
const listHousing = housing.map(housing =>
    <li key={housing.id} id={housing.id} className="card-housing">
        <a href="">
        <img
        src={housing.cover} alt='cover' />
        <p>
            <b>{housing.title}</b>
        </p>
        </a>
    </li>)
    return <ul>{listHousing}</ul>
}

export default Card