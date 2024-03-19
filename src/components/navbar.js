import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Dark from '../dark.png'
import Light from '../white.png'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { toggleMode } from '../state/modetoggle'
export default function Navbar(){

    const dispatch = useDispatch();
    const mode = useSelector(state => state.darkMode)

    return (
        <nav className={`navbar navbar-expand-lg ${mode ? "dark" : "bg-body-tertiary"} fixed-top`}>
            <div className="container-fluid">
              <img src={mode ? Light : Dark} width={"80px"} className="navbar-brand" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontSize: "larger"}}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className={`nav-link ${mode && 'dark'}`} aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className={`nav-link ${mode && 'dark'}`} to="/about" >About</Link>
                        </li>
                        <li className="nav-item">
                          <Link className={`nav-link ${mode && 'dark'}`} to="/business" >Business</Link>
                        </li>
                        <li className="nav-item">
                          <Link className={`nav-link ${mode && 'dark'}`} to="/entertainment" >Entertainment</Link>
                        </li>
                        <li className="nav-item">
                          <Link className={`nav-link ${mode && 'dark'}`} to="/health" >Health</Link>
                        </li>
                        <li className="nav-item">
                          <Link className={`nav-link ${mode && 'dark'}`} to="/science" >Science</Link>
                        </li>
                        <li className="nav-item">
                          <Link className={`nav-link ${mode && 'dark'}`} to="/sports" >Sports</Link>
                        </li>
                        <li className="nav-item">
                          <Link className={`nav-link ${mode && 'dark'}`} to="/technology" >Technology</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch" style={{color : 'black'}}>
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => {dispatch(toggleMode())}}/>
                      <label className={`form-check-label ${mode && 'dark'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
