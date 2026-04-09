import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Navbar = () => {
    const navigate = useNavigate()

    const logout = () => {
        Cookies.remove('jwt_token')
        navigate('/login')
    }

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo-link">
                <h1 className="navbar-logo">Travel Trip</h1>
            </Link>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/my-trips" className="nav-link">My Trips</Link>
                </li>
                <li>
                    <Link to="/history" className="nav-link">History</Link>
                </li>
            </ul>
            <button className="logout-button" onClick={logout}>Logout</button>
        </nav>
    )
}

export default Navbar