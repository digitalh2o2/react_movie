import React from 'react';
import Home from './Home';
import Movie from './Movie';
import View from './View';
import About from './About';
import Nav from './Nav';
import './../App.css';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movies' component={Movie} />
            <Route path='/movies/:id' component={View} />
            <Route path='/about' component={About} />
            <Route render={function() {
              return <p>Not Found </p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
