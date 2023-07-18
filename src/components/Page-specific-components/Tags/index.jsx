import './assets/Tags.scss'

const ListTags = (props)=> {
    return <li className='tagContent'>{props.value}</li>
}

const Tags = (props) => {
    const tagsContent = props.tags
    const tagsItems = tagsContent.map((tagsContent) => 
    <ListTags key={tagsContent.toString()}
               value= {tagsContent}
               />
    )
    return (
        <ul className='tagList'>
            {tagsItems}
        </ul>
    )
}

export default Tags