import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from "phosphor-react"
import { User } from "phosphor-react"
import './Navbar.css'
import logo from '../assests/logo.png'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/">
            <img src={logo} className='img1'/>
            </Link>
            <div>
                <h1 className='brand'>Gada Electronics</h1>
            </div>
            <div className='links'>
                <Link to="/">
                    <User size={35}/>
                </Link>
                <Link to="/cart">
                    <ShoppingCart size={35} />
                </Link>

            </div>
        </div>
    )
}
