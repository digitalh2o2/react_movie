var React = require('react');

class Home extends React.Component{
  render(){
    return(
      <section className="input-field site-content">
        <div className="container has-text-centered">
          <h1 className="title">Welcome</h1>
          <div>
            <p>Welcome to the Movie Search App. Please visit the 'Movies' page to start searching for your favorite movies!</p>
          </div>
        </div>
      </section>
    )
  }
}

module.exports = Home;
