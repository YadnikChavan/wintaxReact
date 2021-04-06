import React from 'react'
import {NavLink} from "react-router-dom"
import { Navbar } from "react-bootstrap"

function Navbar_t() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <Navbar className="navbar navbar-expand-lg navbar-light bg-light" bg="light" expand="lg">
                    <NavLink className="navbar-brand" to="/" >Wintax Solution</NavLink>
                        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="menu_active" className="nav-link" aria-current="page" to="/callback">Contact Us</NavLink>
                                        </li>
                                    </ul>
                        </Navbar.Collapse>
                    </Navbar>
                    </div>
                </div>
            </div>
        

            
        </>
    )
}

export default Navbar_t
