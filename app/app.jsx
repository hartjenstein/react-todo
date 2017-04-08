import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {TodoApp} from 'TodoApp';
// load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>
 /* <Router history={hashHistory}>
    <Route path="/" component={ Main }>
       <Route path="/countdown" component={ Countdown }/>

       <IndexRoute component={ Timer } />
    </Route>
  </Router>*/,
  document.getElementById('app')
);
