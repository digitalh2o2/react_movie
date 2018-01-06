var axios = require('axios');

module.exports = {
  movieView(id){
    var encodedURI = window.encodeURI(`https://api.themoviedb.org/3/movie/${id}?api_key=a55e47af6ed12e1fe83907c60069b090&language=en-US`)
    return axios.get(encodedURI)
      .then(function(response){
        return response
      })
  },

  fetchMovies: function(movie, page){
    var encodedURI = window.encodeURI(`https://api.themoviedb.org/3/search/movie?api_key=a55e47af6ed12e1fe83907c60069b090&query=${movie}&page=${page}`)

    return axios.get(encodedURI)
      .then(function(response) {
        return response
      })
  }
}
