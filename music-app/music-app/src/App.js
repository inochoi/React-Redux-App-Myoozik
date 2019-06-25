import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostsIndex from './pages/PostsIndex';
import PostsNew from './pages/PostsNew';
import PostsShow from './pages/PostsShow';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={PostsIndex} />
      <Route path="/posts/new" component={PostsNew} />
      <Route path="/posts/:id" component={PostsShow} />
    </Switch>
  );
}

export default App;
