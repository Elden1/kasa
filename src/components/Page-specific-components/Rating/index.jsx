import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './assets/Rating.scss'

const Rating = (props) => {

    const Stars = (i) => {
        return <FontAwesomeIcon 
        icon={faStar} 
        key={i} 
        className='Stars'/>
    }
    const GreyStars = (i) => {
        return <FontAwesomeIcon 
        icon={faStar} 
        key={i} 
        className='greyStars'/>
    }

    const starsRating = 
        Array.from({length: props.rating}, (_) => {
        return <Stars />;
    })

    const greyStarsNmb = 5 - starsRating.length 

    const greyStarsRating = 
        Array.from({length: greyStarsNmb}, (_) => {
        return <GreyStars />;
        })

        return (
        <div className='ratingCategory'>
            <div className='redStars'>
                {starsRating}
            </div>
            <div className='greyStars'>
                {greyStarsRating} 
            </div>
        </div>
            )
}

export default Rating