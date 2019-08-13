import React from 'react';
import { Link } from "react-router-dom";

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to='/' className='sidebar'>Home</Link></li>
                <li><Link to='/library' className='sidebar'>Song Library</Link></li>
                <li><Link to='/playlist' className='sidebar'>Playlists</Link></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;