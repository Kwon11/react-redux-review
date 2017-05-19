import React, {Component} from 'react'; //have to do this to translate jsx into javascript
//calls React.createElement whenever we try to create a jsx component
//{ Component } says "pull Component from the export of 'react' ";
//user types input, we make api request

class SearchBar extends Component {//class component. SearchBar now has all the functionality of React.Component class
  constructor(props) {
    super(props); //Component itself has its own constructor function. calling parent method essentially
    this.state = { //anytime you modify state after this, use this.setState();
      term: 'Search for videos!' //this.state.value = something ---is HORRIBLE, WONT TRIGGER REACT
    };
  } //constructor: called automatically when new instance of class is created
  //reserved for doing some set up inside of our class

  onInputChange (term) { //on or handle, component, event "on-input-change"
    this.setState({term})
    this.props.onSearchTermChange(this.state.term);
  }

  render () { //class based must have a render method. these are methods of the class
    return (
        <div className="search-bar">
          <input value={this.state.term} onChange={(event) => this.onInputChange(event.target.value)  }/>
        </div>
      );
  } //because value is set by state, it is now a "controlled component"
  //input changes, tells state what the change was, and the state tells component what to show


}

export default SearchBar;
