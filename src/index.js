import React from 'react'; //go find the library in node_modules called react, and give this script access to React
import ReactDOM from 'react-dom'; //separate library. React => core components. ReactDOM => the library that inserts into the DOM
import SearchBar from './components/SearchBar.jsx'; //importing files that WE write need a path. don't need file extension when its js
import YTSearch from 'youtube-api-search';


const API_KEY = "AIzaSyCa8F6JRMT1ObKRwQB8o8KkUN4C-tgDic4";
//const is a variable that doesn't change
YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {console.log(data)})

const App = () => {//class definition that creates instances of the component
  return (
    <div>
      <SearchBar />
    </div>
  );
}         //that is jsx^^, which is way neater than doing it with just javascript and react

ReactDOM.render(<App />, document.querySelector('.container'));
//<App/> creates an instance of the class "App"
