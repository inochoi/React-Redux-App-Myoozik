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
                <li><a className='sidebar' href="/">Home</a></li>
                <li><a className='sidebar' href="/library">Song Library</a></li>
                <li><a className='sidebar' href="/playlist">Playlists</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;