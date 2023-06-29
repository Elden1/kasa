import { intelContent } from "./intel.js"

function Intel() {
    const intelContentLi = intelContent.map(intelContent =>
        <li key={intelContent.id}>
            <h1>{intelContent.title}</h1>
            <h4>{intelContent.content}</h4>
        </li>)
        return <ul>{intelContentLi}</ul>
    }

export default Intel