
const Slide = (props) => {
return (
    <div key={props.key}>
        Ici s'élèvera la Gallery de <h1>{props.title}</h1>
    </div>
    )
}

export default Slide