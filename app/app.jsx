import React from 'react';
import ReactDOM from 'react-dom';
import  {Route, Router, IndexRoute, hashHistory} from 'react-router';


// load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>React Boilerplate 3</p>
 /* <Router history={hashHistory}>
    <Route path="/" component={ Main }>
       <Route path="/countdown" component={ Countdown }/>

       <IndexRoute component={ Timer } />
    </Route>
  </Router>*/,
  document.getElementById('app')
);
