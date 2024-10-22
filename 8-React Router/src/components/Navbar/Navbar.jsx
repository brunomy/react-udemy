import './Navbar.scss'
import { NavLink } from 'react-router-dom'

// Links com React Router

export default function Navbar() {
    return (
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link> */}
            <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
        </nav>
    )
}