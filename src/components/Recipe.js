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
        //checks if used the 'relatedRecipes' function. if so, we want to change the search term we use in order to get the right recipePage when clicked.
        if (relatedRecipesValue) {
            searchTermUpdated = relatedRecipesValue;
        } else {
            searchTermUpdated = this.props.searchTerm;
        }
        
        return(
            <div className="recipe">
                <div className="recipeImageRow">
                    <Link to={{pathname:`/${this.props.label}`, state: {searchTerm: searchTermUpdated}}}>
                        <img className="image" src={this.props.image} alt=""/>
                    </Link>
                </div>
                <div className="recipeDetailsRow">
                <Link to={{pathname:`/${this.props.label}`, state: {searchTerm: searchTermUpdated}}}>  
                        <h2>{this.props.label}</h2>
                        <ol className="ol">
                            {this.props.ingredients.map( ingredient => (
                                <div key = {i++}>
                                    <li>{ingredient.text}</li>
                                </div>
                            ))}
                        </ol>
                    </Link>
                    <button className="moreRecipesBtn" onClick={() => {
                        relatedRecipesValue = relatedRecipes(this.props.ingredients, this.props.getRecipesAction);
                        console.log(searchTermUpdated);
                    }} title="more recipes like this!">
                        <i className="ellipsis horizontal icon"></i>{this.props.searchTerm}
                    </button>
                </div>
            </div>
        );
    }
    
}


//get the recipes that are related to this recipe by ingredients
const relatedRecipes = (ingredients, getRecipesAction) => {
    //a list of basic ingredients
    const basicIngredList = ['salt','pepper','oil','flour','garlic','sugar','water','onion','olive','chicken','juice','milk','lemon','butter','egg','cheese','wheat','vegetable','vanilla','vinegar','parsley','honey','soy','wine','seeds','celery','rice','cinnamon','tomato','bread','eggs','onions','yeast','leaves','broth','tomatoes','cream','cloves','thyme','peeled','ginger','beans','soda','basil','mushrooms','apple','parmesan','yogurt','stock','bell','oats','sodium','beef','flakes','carrot','oregano','chocolate','cumin','paprika','sesame','mustard','spinach','corn','potatoes','coconut','carrots','nutmeg','cilantro','raisins','chili','syrup','peas','peanut','almond','walnuts','canned','lime','leaf','pineapple','margarine','cabbage','cucumber','broccoli','cornstarch','zucchini','coriander', 'paste','turkey' ,'banana','almonds' ,'nuts','maple' ,'cheddar' ,'cider' ,'scallions', 'lettuce', 'dill'];
    let keyIngredWords = [];
    let finalArray = [];
    ingredients.forEach((ingredient) =>{                                      //map over every ingredient line
        keyIngredWords = (ingredient.text.split(' '));                  
        keyIngredWords.forEach((keyIngredWord) => {                           //map over every word in ingredient line
            basicIngredList.forEach((basicIngredItem) => {                    //map over every word in the basic ingredients list  
                if (keyIngredWord === basicIngredItem) {
                    finalArray.push(keyIngredWord);
                }
            })
        })
    })                          
    //join the strings in the array into one string
    finalArray = finalArray.join(' ');
    getRecipesAction(finalArray) ;
    return finalArray;
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
