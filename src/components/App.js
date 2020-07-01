import React from 'react';
import titlePhoto from '../pics/title.png';
import RecipesGrid from './RecipesGrid';
import RecipePage from './RecipePage';
import Nav from './Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <Nav />
      <div className="App">
        <div className="titlePictureDiv"><a href="/"><img className="titlePicture" src={titlePhoto} alt=""/></a></div>
        <div className="subTitle">What would you like to cook today?</div>
        <Route path="/" exact component={RecipesGrid}/>
        <Route path="/recipePage/:label"  component={RecipePage}/>
        <Route path="/menu/:id"  component={RecipesGrid}/>

      </div>
    </Router>
  );
};

export default App;


