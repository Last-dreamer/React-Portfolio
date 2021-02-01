import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Portfolio from './components/portfolio';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
     <Switch>
        <Route exact path='/'>
          <App/>
        </Route>
        <Route exact path='/portfolio' >
          <Portfolio />
        </Route>
     </Switch>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
