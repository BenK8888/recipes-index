import React from 'react';
import RecipesGrid from './RecipesGrid';
import Nav from './Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={RecipesGrid}/>
      </div>
    </Router>
  );
};

export default App;


