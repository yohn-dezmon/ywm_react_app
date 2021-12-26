import React from 'react';

class SearchBar extends React.Component {
  
  state = { term: 'You Want Milk. Jetlag festival, July 31, 2021' };
  
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  
  onFormSubmit = (event) => {
    // make sure the browser doesn't attempt to automatically submit the form! 
    event.preventDefault();
    
    // TODO: 
    // Make sure we call callback from parent component 
    this.props.onFormSubmit(this.state.term);
  };
  
  
  render() {
    return (
      // ui segment draws a rectangle around the div
      // search-bar is for our css page (Custom)
      <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input 
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
           />
        </div>
      </form>
      </div>
    );
  }
}

export default SearchBar;