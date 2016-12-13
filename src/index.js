import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'



import Root from './containers/Root';

import App from './containers/App';


import './styles/main.scss';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={App} />
    </Route>
  </Router>,
  document.getElementById('root')
);
