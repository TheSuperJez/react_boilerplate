import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, User, Error404 } from '../Pages';
import reduxStore from '../state/configureState';


export default function Routes() {
  return (
    <ReduxProvider store={reduxStore}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/user" component={User} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </ReduxProvider>
  );
}
