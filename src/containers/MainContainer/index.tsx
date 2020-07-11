//  import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { history } from '$redux/store';
import MainPage from '$components/MainPage';

const MainContainer = () => (
  <ConnectedRouter history={history}>
    <MainPage />
  </ConnectedRouter>
);

export default MainContainer;

// use hot
//  export default hot(MainContainer);
