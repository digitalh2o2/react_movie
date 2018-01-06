var React = require('react');
var api = require('./../utils/api');
var Link = require('react-router-dom').Link;

class View extends React.Component{
  constructor(props){
    super (props)

    this.state = {
      title: null,
      summary: null,
      poster_path: null,
      vote_average: null,
      vote_count: null
    }

    this.reset = this.reset.bind(this);
  }

  componentDidMount(){
    var id = this.props.location.params;
    api.movieView(id)
      .then(function(res){
        console.log(res)
        this.setState(function(){
          return {
            title: res.data.title,
            summary: res.data.overview,
            poster_path: res.data.poster_path,
            vote_average: res.data.vote_average,
            vote_count: res.data.vote_count
          }
        })
      }.bind(this))
  }

  reset(){
    this.setState({
      title: null,
      summary: null
    })
  }

  render(){

    return(
      <section className="site-content">
        <div className="container input-field has-text-centered">
          <Link to="/movies">
            <button href="/movies" onClick={this.reset} className="button is-primary input-field">
              New Search
            </button>
          </Link>
        </div>

        <div className="container has-text-centered the-grid">
          <img src={'https://image.tmdb.org/t/p/w185/' +this.state.poster_path} alt={this.state.title}/>
          <div className="card">
            <h1 className="title">{this.state.title}</h1>
            <label className="label">Overview:</label>
            <p>{this.state.summary}</p>
            <div className="the-grid">
              <p><strong>User Score:</strong> {this.state.vote_average}</p>
              <p><strong>Vote Count:</strong> {this.state.vote_count}</p>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

module.exports = View;
