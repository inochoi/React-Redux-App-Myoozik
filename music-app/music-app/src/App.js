import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Library from './components/library';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={null} />
        <Route path="/library" component={Library} />
      </Switch>
    </div>
  );
}

export default App;
