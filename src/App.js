import React from "react";
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/Store';
import { Router, Route, Switch } from "react-router-dom";
//Navigation
import Navigation from './navigation/Navigation'
//Pages
import Home from './screens/main/index'
import Post from "./screens/post/index";
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';

import history from './history';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Navigation />
            <div className="main_wrapper">
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/login" exact component={() => <Login />} />
              <Route path="/register" exact component={() => <Register />} />
              <Route path="/create" exact component={() => <Post />} />
            </Switch>
            </div>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
