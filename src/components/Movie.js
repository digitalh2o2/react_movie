import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Search from './Search';
import MovieGrid from './MovieGrid';
import './../App.css';
import api from './../utils/api';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

const DEFAULT_SEARCH = 'Coco'
let page = 1

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: '',
      movies: null,
      pageCount: null
    }

    this.onSearch = this.onSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount(){
    api.fetchMovies(DEFAULT_SEARCH)
      .then(function(res){
        return res
      })
  }

  onSearch(e){
    this.setState({searchTerm: e.target.value})
  }

  onSubmit(event){
    this.setState({searchTerm: this.state.searchTerm})

    api.fetchMovies(this.state.searchTerm, page = 1)
      .then(function(res){
        console.log(res)
        this.setState(function() {
          return {
            movies: res,
            pageCount: res.data.total_pages
          }
        })
      }.bind(this))
    event.preventDefault();
  }

  loadMore(data){
    let selected = data.selected + 1;
    let offset = Math.ceil(selected * this.props.perPage)
    api.fetchMovies(this.state.searchTerm, selected)
      .then(function(res){
        this.setState(function() {
          return {
            movies: res
          }
        })
      }.bind(this))
  }

  render() {
    return (
      <section className="site-content">
        <div className="container">
          <Search
            value={this.state.searchTerm}
            onChange={this.onSearch}
            onSubmit={this.onSubmit}
           >
             Search
          </Search>

          {!this.state.movies ?
            <section className="site-content">
              <div className="container input-field the-grid">
                <p>Please Search For A Movie</p>
              </div>
            </section>

            :
            <section className="site-content">
              <div>
                <MovieGrid
                  movies={this.state.movies}
                  match={this.props.match}
                />
                <div className="container">
                  <ReactPaginate
                    containerClassName={"results"}
                    activeClassName={"active"}
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={this.loadMore}
                  />
                </div>
              </div>
            </section>
          }
        </div>
      </section>
    );
  }
}

export default App;
