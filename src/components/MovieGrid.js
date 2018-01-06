import React from 'react';
import ReactPaginate from 'react-paginate';
var Link = require('react-router-dom').Link;

const no_image = 'http://manntheatres.com/images/ui/no-image-185x278.jpg'

class MovieGrid extends React.Component{
  render(){
    const match = this.props.match
    return(
        <section className="site-content">
          <div className="container has-text-centered the-grid">
            <div className="columns is-vcentered is-multiline">
              {this.props.movies.data.results.map(function(name, index){
                return <div key={index} className="column is-one-quarter">

                  <Link
                    to={{
                      pathname: match.url + '/view/' + name.title,
                      params: name.id
                    }}
                  >
                    <h3 className="subtitle">{name.title}</h3>
                  </Link>


                  {name.poster_path === null
                    ?
                    <div>
                      <img src={no_image} alt={name.title}/>
                    </div>
                     :
                    <div>
                      <img src={'https://image.tmdb.org/t/p/w185/' +name.poster_path} alt={name.title}/>
                    </div>
                  }
                </div>
              })}
            </div>
          </div>
        </section>
    )
  }
}

export default MovieGrid;
