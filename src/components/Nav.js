var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav(){
  return(
    <nav className="navbar">
      <div className="navbar-item">
        <NavLink exact activeClassName="active" to='/'>
          Home
        </NavLink>
      </div>
      <div className="navbar-item">
        <NavLink activeClassName="active" to='/movies'>
          Movies
        </NavLink>
      </div>
      <div className="navbar-item">
        <NavLink activeClassName="active" to='/about'>
          About
        </NavLink>
      </div>
    </nav>
  )
}

module.exports = Nav;
