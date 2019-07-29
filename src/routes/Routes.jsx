import React from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Main, User } from '../Pages';
import reduxStore from '../state/configureState';


export default function Routes() {
  return (
    <ReduxProvider store={reduxStore}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/user" component={User} />
        </Switch>
      </Router>
    </ReduxProvider>
  );
}
