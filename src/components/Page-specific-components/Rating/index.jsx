import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './assets/Rating.scss'

const Rating = (props) => {

    const starsRating = 
        Array.from({length: props.rating}, (i) => {
            return <FontAwesomeIcon 
            icon={faStar}
            key={Math.random()}
            className='Stars'/>
    })

    const greyStarsNmb = 5 - starsRating.length 

    const greyStarsRating = 
    Array.from({length: greyStarsNmb}, (i) => {
        return <FontAwesomeIcon 
        icon={faStar} 
        key={Math.random()}
        className='greyStars'/>
    })
           
        return (
        <article key={props.rating} className='ratingCategory'>
            <div className='redStars'>
                {starsRating}
            </div>
            <div className='greyStars'>
                {greyStarsRating} 
            </div>
        </article>
            )
}

export default Rating