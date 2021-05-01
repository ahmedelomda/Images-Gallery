import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ImageGrid from './ImageGrid/index';
import Favorite from './Favorite-page/index';
import Home from './home';
import './App.css';

function App() {

  // const [{ favoriteList }] = ImageGrid();

  return (
    <div className="App">
      <Router>
        <Switch >
          <Route path="/Favorite">
            <Favorite favoriteList={''} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <ImageGrid />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
