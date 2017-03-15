var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
        <IndexRoute component={Weather}/>
      </Route>
    </Router>,
    document.getElementById('app')
);
