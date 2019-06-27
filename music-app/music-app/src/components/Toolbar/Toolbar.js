import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const toolbar = props => (
  <header className="toolbar">
    <nav>
        <div className="toolbar__navigation"></div>
        <div className="toolbar__toggle-button"><DrawerToggleButton click={props.drawerClickHandler} /></div>
        <div className="toolbar__logo"><a href="/">MYOOZIK APP</a></div>

    </nav>
  </header>
)

export default toolbar;