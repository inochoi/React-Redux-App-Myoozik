import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/library">Song Library</a></li>
                <li><a href="/playlist">Playlists</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;