import React, { useState, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from './pages/SongList';
import PlaylistsIndex from './pages/PlaylistsIndex';
import PlaylistsNew from './pages/PlaylistsNew';
import PlaylistsShow from './pages/PlaylistsShow';
import AddSong from './pages/AddSong';
import './App.css';
import Homepage from './pages/Homepage';

const App = () => {
      
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/playlist/new" component={PlaylistsNew} />
      <Route path="/playlist/:id/addsong" component={AddSong} />
      <Route path="/playlist/:id" component={PlaylistsShow} />
      <Route path="/playlist" component={PlaylistsIndex} />
      <Route path="/library" component={SongList} />
    </Switch>

  );
}

export default App;
