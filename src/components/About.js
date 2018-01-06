var React = require('react')

function About(){
  return(
    <section className="input-field site-content">
      <div className="container has-text-centered">
        <h1 className="title">Welcome</h1>
        <div>
          <p>API provided by <a href="https://developers.themoviedb.org/4/getting-started/authorization">The Movie DB</a></p>
        </div>
      </div>
    </section>
  )
}

module.exports = About;
