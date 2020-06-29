import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import  {getRecipes}  from '../actions';
import {Link} from 'react-router-dom';


var i = 0;


class Recipe extends React.Component {

    render() {
        return(
            <div className="recipe">
                <Link to={{pathname:`/${this.props.label}`, state: {searchTerm: this.props.searchTerm}}}>
                    <div className="recipeImageRow">
                    <img className="image" src={this.props.image} alt=""/>
                </div>
                </Link>
                <div className="recipeDetailsRow">
                <Link to={{pathname:`/${this.props.label}`, state: {searchTerm: this.props.searchTerm}}}>  
                        <h2>{this.props.label}</h2>
                        <ol className="ol">
                            {this.props.ingredients.map( ingredient => (
                                <div key = {i++}>
                                    <li>{ingredient.text}</li>
                                </div>
                            ))}
                        </ol>
                    </Link>
                    <button className="moreRecipesBtn" onClick={() => relatedRecipes(this.props.ingredients, this.props.getRecipesAction)} title="more recipes like this!">
                        <i className="ellipsis horizontal icon"></i>
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
