//REDUCERS


import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import recipeReducer from './recipeReducer';


//gather all the reducers results into a single function (that we can later pass to the provider using the 'createStore' function).
export default combineReducers({
    recipes: recipesReducer,
    recipe: recipeReducer 
});
 
