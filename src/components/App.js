import React from 'react';
import RecipesGrid from './RecipesGrid';
import RecipePage from './RecipePage';
import Nav from './Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={RecipesGrid}/>
        <Route path="/:label" component={RecipePage}/>
      </div>
    </Router>
  );
};

export default App;


