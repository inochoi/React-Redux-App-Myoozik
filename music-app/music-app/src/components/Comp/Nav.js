import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';



const Nav = (props) => {
    return ( 
        <nav>
            <div className="nav-items">
                <Link to="/">USER</Link>
                <Link to="/About">ABOUT</Link>
                <Link to="/Contact">CONTACT</Link>
            </div>
        </nav>
     );
}
 
export default Nav;