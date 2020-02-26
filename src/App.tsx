import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import { StateCtx } from './contexts';
import { IState, Actions, reducer } from './reducers';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';


function App() {
  const [state, dispatch]: [
    IState,
    (action: Actions) => void
  ] = React.useReducer(reducer, { username: "" });

  return (
    <StateCtx.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className="container">
          <h1>This is the simple-state-reducer app</h1>
          <p>This app shows a simple reducer function to handle state changes.
            The state is very simple too: a string representing a name.
            The visitor can change the username visiting the About page.
            If the user saves it, the dispatch function of the useContext
            hook is used, which is connected to the reducer function.
            The value of the username is then used in the Home page by reading
            the state from the context.</p>
          <hr />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/settings" exact component={Settings} />
          </Switch>
        </div>
      </BrowserRouter>
    </StateCtx.Provider>
  );
}

export default App;
