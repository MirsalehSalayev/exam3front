import React from 'react'
import "../Navbar/navbar.scss"
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='NavbarComponent'>
            <div className='NavbarTitle'>
                <h1>Floral Studio</h1>
            </div>
            <div className='NavbarPages'>
                <Link to="/">Home</Link>
                <Link to="/add">Add</Link>
                <Link to="/Basketpage">Basket</Link>

            </div>
        </div>
    )
}

export default Navbar