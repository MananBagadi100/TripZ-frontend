import { Link, NavLink } from 'react-router-dom'
import '../Styles/NavbarStyles.css'
import logo from '../assets/logo.jpeg'
const Navbar = () => {
    return (
        <div className='navbar-main-container'>
            <div className="navbar-content-area">
                <div className="navbar-public-routes">
                    <div className="tripz-logo-in-navbar">
                        <Link to="/">
                            <img src={logo} alt="TripZ Logo" className="tripz-logo" />
                        </Link>
                    </div>
                    <NavLink to='/' className="navbar-home-route">Home</NavLink>
                    <NavLink to='/contact-us' className="navbar-contact-us-route">Contact Us</NavLink>
                </div>
                <div className="navbar-protected-route">
                    <Link className='navbar-admin-route'>Admin</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar