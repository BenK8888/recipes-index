import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import  {getRecipes}  from '../actions';
import {Link} from 'react-router-dom';


//initialze variables
var i = 0;
let searchTermUpdated = '';
let relatedRecipesValue = '';


class Recipe extends React.Component {
    render() {
        //shorten the syntax for callig the props for a better looking code
        const {label, image, ingredients} = this.props;

        //check if the 'relatedRecipes' function was used. if so, we'll change the search term we use in order to get the matching recipePage when clicked.
        if (relatedRecipesValue) {
            searchTermUpdated = relatedRecipesValue;
        } else {
            searchTermUpdated = this.props.searchTerm;
        }

        return(
            <div className="recipe">
                <div className="recipeImageRow">
                    <Link to={{pathname:`/recipePage/${label}`, state: {searchTerm: searchTermUpdated}}}>
                        <img className="image" src={image} alt=""/>
                    </Link>
                </div>
                <div className="recipeDetailsRow">
                <Link to={{pathname:`/recipePage/${label}`, state: {searchTerm: searchTermUpdated}}}>  
                        <h2>{label}</h2>
                        <ol className="ol">
                            {ingredients.map( ingredient => (
                                <div key = {i++}>
                                    <li>{ingredient.text}</li>
                                </div>
                            ))}
                        </ol>
                    </Link>
                    <button className="moreRecipesBtn" 
                        onClick={() => relatedRecipesValue = relatedRecipes(ingredients, this.props.getRecipesAction)} 
                        title="more recipes like this!">
                        <i className="ellipsis horizontal icon"></i>
                    </button>
                </div>
            </div>
        );
    }
    
}


//find the ingredients in the chosen recipe and get the recipes that are have the same ingredients
const relatedRecipes = (ingredients, getRecipesAction) => {
    //a list of basic ingredients
    const basicIngredList = ['salt','pepper','oil','flour','garlic','sugar','water','onion','olive','chicken','juice','milk','lemon','butter','egg','cheese','wheat','vegetable','vanilla','vinegar','parsley','honey','soy','wine','seeds','celery','rice','cinnamon','tomato','bread','eggs','onions','yeast','leaves','broth','tomatoes','cream','cloves','thyme','peeled','ginger','beans','soda','basil','mushrooms','apple','parmesan','yogurt','stock','bell','oats','sodium','beef','flakes','carrot','oregano','chocolate','cumin','paprika','sesame','mustard','spinach','corn','potatoes','coconut','carrots','nutmeg','cilantro','raisins','chili','syrup','peas','peanut','almond','walnuts','canned','lime','leaf','pineapple','margarine','cabbage','cucumber','broccoli','cornstarch','zucchini','coriander', 'paste','turkey' ,'banana','almonds' ,'nuts','maple' ,'cheddar' ,'cider' ,'scallions', 'lettuce', 'dill'];
    let recipeIngred = [];
    let finalIngredList = [];
    ingredients.forEach((ingredient) =>{                                      //map over every ingredient line
        recipeIngred = (ingredient.text.split(' '));                  
        recipeIngred.forEach((ingred) => {                                    //map over every word in ingredient line
            basicIngredList.forEach((basicIngredItem) => {                    //map over every word in the basic ingredients list  
                if (ingred === basicIngredItem) {
                    finalIngredList.push(ingred);
                }
            })
        })
    })                          
    //join the strings in the array into one string
    finalIngredList = finalIngredList.join(' ');
    getRecipesAction(finalIngredList) ;
    return finalIngredList;
}


//get the "getRecipes" action to be used in the component
function mapDispatchToProps(dispatch){
    return {
       getRecipesAction : (searchTerm) => {
         dispatch(getRecipes(searchTerm)) 
      }
    }
  }


   


export default connect (null, mapDispatchToProps) (Recipe);
