import './assets/Location.scss'

const Location = (props) => {
    return (
        <div key={props.id} className='location-content'>
            <h1>{props.title}</h1>
            <h3>{props.location}</h3>
        </div>
        )
    }
    
export default Location