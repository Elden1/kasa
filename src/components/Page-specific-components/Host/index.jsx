const Host = (props) => {
    return (
        <div key={props.key}>
            <p>{props.host}</p>
            <img src={props.hostPic} alt={props.host}></img>
        </div>
        )
    }
    
export default Host