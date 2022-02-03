//This is a functional component
/* import React from 'react';

//ES6 Notation
const SearchBar = () => {
  return <input />;
};

export default SearchBar;  */

import React, { Component } from 'react';

//ES6 Notation
class SearchBar extends Component {

constructor(props) {
  super(props);

/*State it is a plane js object that exist in any component that is class base Component.
 Each instance of a class base Component has their own copy of the state,
 we initialize the state by defining a constructor method and setting the state like this.state*/
  this.state = { term: ''};
}

//Ever react component that I creat needs a render method to place all methods in the class
  render(){
    //remember this.state.term =  event.target.value is not possible here to set the state
    return (
      <div className = "search-bar">
        <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value) } />

      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
