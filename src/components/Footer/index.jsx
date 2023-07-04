import LOGOblack from './assets/LOGOblack.png'
import './assets/Footer.scss'

function Footer() {
    return (
        <footer className='main-footer'>
            <div className='logo'>  
                <img src={LOGOblack} alt="logo sombre" />
            </div>
            <h2>© 2020 Kasa. All rights reserved</h2>
        </footer>

    )
}

export default Footer