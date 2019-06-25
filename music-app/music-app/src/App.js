import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlaylistsIndex from './pages/PlaylistsIndex';
import PlaylistsNew from './pages/PlaylistsNew';
import PlaylistsShow from './pages/PlaylistsShow';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={PlaylistsIndex} />
      <Route path="/playlists/new" component={PlaylistsNew} />
      <Route path="/playlists/:id" component={PlaylistsShow} />
    </Switch>
  );
}

export default App;
