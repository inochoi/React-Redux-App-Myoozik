import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlaylistsIndex from './pages/PlaylistsIndex';
import PlaylistsNew from './pages/PlaylistsNew';
import PlaylistsShow from './pages/PlaylistsShow';
import AddSong from './pages/AddSong';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={PlaylistsIndex} />
      <Route path="/playlist/new" component={PlaylistsNew} />
      <Route path="/playlist/:id/addsong" component={AddSong} />
      <Route path="/playlist/:id" component={PlaylistsShow} />
    </Switch>
  );
}

export default App;
