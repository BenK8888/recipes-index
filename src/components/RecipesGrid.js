//RECIPES GRID COMPONENT

import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import { getRecipes } from '../actions';

//the default search term for the first time the website is being mounted.
var searchTerm = 'chocolate';

class RecipesGrid extends React.Component {
    //run once after the mounting of the page and get the web api results using the default value.
    componentDidMount() {
        this.props.getRecipes(searchTerm);  
    }

    //get the web api results using the input the user typed in the search field.
    onSubmitToGetRecipes = (e) => {
        e.preventDefault();
        this.props.getRecipes(searchTerm);
    }

    render(){
        //check if search term was picked from menu. If so, assign the value to the 'searchTerm' variable
        if (this.props.match.path.substring(0,6) === '/menu/') {  
            searchTerm = this.props.match.url.substr(6);   
        } 
        return(
            <div>
                <form onSubmit={this.onSubmitToGetRecipes} className="search-form">
                <button  className="search-button" type="submit">
                    Search
                </button>
                <input className="search-bar" type="text" defaultValue='' onChange={ e => searchTerm = e.target.value}/>
                </form>
                <div className="recipes">
                    {this.props.recipes.map(recipe => (
                        <Recipe 
                            searchTerm = {searchTerm}
                            key={recipe.recipe.label}
                            label={recipe.recipe.label}  
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                            getRecipes={this.getRecipes}
                        />
                    ))}
                </div>
            </div>
        );
    };
}


//take the 'state' object we recieved from the provider and manipulate it for the component's needs.
const mapStateToProps = (state) => {
    return { recipes : state.recipes };
}




//create the components 'props' object with the modified state from the 'mapStateToProps' function and the imported action creators.
export default connect (mapStateToProps, { getRecipes }) (RecipesGrid);