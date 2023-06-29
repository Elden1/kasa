import { Link } from 'react-router-dom'
import logo from './assets/LOGO.png';
import "./assets/Header.scss"

function Header() {
    return (
        <header className='main-header'>
                <img src={logo} alt="logo sombre" />
            <nav>
                <Link to="/"><h3>Accueil</h3></Link>
                <Link to="/Apropos"><h3>A Propos</h3></Link>
            </nav>
        </header>
    )
}

export default Header