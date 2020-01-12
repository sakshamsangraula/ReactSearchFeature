import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCIPsLz_r0-aTeNzXxsg5PSBUhZ_R7Bvoo';
// create a new component that produces HTML

// return the SearchBar component imported from the search_bar file
const App = () => {
   return <div><SearchBar /></div> 
}

// Put the generated HTML into the page (in the dom)

// render the App component to dom by using ReactDom

// Instantiate components before rendering them to the Dom
// by creating an instance of App (<App/>) and put that instance inside index.html(inside a div)
// so the ReactDom knows where to render the instance
ReactDom.render(<App />, document.querySelector('.container'));
