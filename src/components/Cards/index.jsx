import './assets/housing.scss'

const Card = (props) => {
    return (
        
        <li key={props.id} id={props.id} className="card-housing">
        <a href={props.href}>
        <img
        src={props.cover} alt='cover' />
        <div className='card-text-container'>
        <p>
            <b>{props.title}</b>
        </p>
        </div>
        </a>
    </li>
    )
}
export default Card