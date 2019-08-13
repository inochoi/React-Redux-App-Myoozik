import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import myoozik_logo from './myoozik_logo.png';
import { Link } from "react-router-dom";

const toolbar = props => (
  <header className="toolbar">
    <nav>
      <div className="toolbar__navigation"></div>
      <div className="toolbar__toggle-button"><DrawerToggleButton click={props.drawerClickHandler} /></div>
      <div><Link to='/'><img id='logo' src={myoozik_logo} alt='logo'></img></Link></div>

    </nav>
  </header>
)

export default toolbar;