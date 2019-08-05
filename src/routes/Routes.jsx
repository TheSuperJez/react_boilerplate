import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Spinner } from 'reactstrap';
import { Error500 } from '../Pages';
import reduxStore from '../state/configureState';


export const handleLoading = (ownProps, loading) => {
  if (ownProps.error) {
    const env = process.env.NODE_ENV;
    if (env === 'development') {
      // window.log.error(ownProps.error);
      // console.log(ownProps.error);
    }
    return <Error500 />;
  }

  return loading;
};

/**
 * Returns a valid Main component page
 * @return {Object}
 */
const Main = {
  path: '/',
  component: Loadable({
    loader: () => Promise.resolve(require('../Pages/Main')),
    loading: ownProps => handleLoading(ownProps, <Spinner />),
  }),
};

/**
 * Returns a valid User component page
 * @return {Object}
 */
const User = {
  path: '/user',
  component: Loadable({
    loader: () => Promise.resolve(require('../Pages/User/UserList')),
    loading: ownProps => handleLoading(ownProps, <Spinner />),
  }),
};

/**
 * Returns a valid notFound component page
 * Remember that this component / page only came out when the user try to put
 * by hand a url that its not allow
 * @return {Object}
 */
const errorRoute = {
  path: '*',
  component: Loadable({
    loader: () => Promise.resolve(require('../Pages/Error404')),
    loading: ownProps => handleLoading(ownProps, <Spinner />),
  }),
};


export default function Routes() {
  return (
    <ReduxProvider store={reduxStore}>
      <Router>
        <Switch>
          <Route exact {...Main} />
          <Route {...User} />
          <Route {...errorRoute} />
        </Switch>
      </Router>
    </ReduxProvider>
  );
}
