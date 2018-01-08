import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component{
  render(){
    return(
      <section>
        <form onSubmit={this.props.onSubmit} className="input-field ">
          <div className="field has-addons ">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Search For Movie"
                value={this.props.value}
                onChange={this.props.onChange}
              />
            </div>
            <div className="control">
              <button className="button is-primary" type="submit">
                {this.props.children}
              </button>
            </div>
          </div>
        </form>
      </section>
    )
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Search;
