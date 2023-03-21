import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'
import logoWhite from '../../../assets/images/logo-white.svg'
import './Navbar.css'

const Navbar = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <>
            {location.pathname !== '/' && (<div className="navbar-background" />)}
            <div className="navbar-main">
                <div className="navbar-logo" onClick={() => handleNavigate()}>
                    {location.pathname !== '/' ? (
                        <img src={logoWhite} alt="binoculars.health" />
                    ) : (
                        <img src={logo} alt="binoculars.health" />
                    )}
                </div>
                <div className="navbar-account">

                </div>
            </div>
        </>
    )
}

export default Navbar
