import './assets/Host.scss'

const Host = (props) => {
    return (
        <div key={props.id} className='hostContent'>
            <h3>{props.host}</h3>
            <img src={props.hostPic} alt={props.host}></img>
        </div>
        )
    }
    
export default Host