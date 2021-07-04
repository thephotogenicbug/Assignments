import React from 'react';
import {Link} from 'react-router-dom'

function Header(){
    return(

            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link to='/' className="navbar-brand">NodeJS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to='/' className="nav-link" >New Project</Link>
                </li>
                <li className="nav-item">
                    <Link to='/activity' className="nav-link" >New Activity</Link>
                </li>
               
                </ul>
            </div>
            </nav>

    )
}
export default Header;