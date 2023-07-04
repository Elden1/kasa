import './assets/housing.scss'

const Card = (props) => {
    return (
        
        <li key={props.index} id={props.id} className="card-housing">
        <a href={props.href}>
        <img
        src={props.cover} alt='cover' />
        <p>
            <b>{props.title}</b>
        </p>
        </a>
    </li>
    )
}
export default Card