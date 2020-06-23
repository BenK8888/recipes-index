import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';


const basicIngredList = ['salt','pepper','oil','flour','garlic','sugar','water','onion','olive','chicken','juice','milk','lemon','butter','egg','cheese','wheat','vegetable','vanilla','vinegar','parsley','honey','soy','wine','seeds','celery','rice','cinnamon','tomato','bread','eggs','onions','yeast','leaves','broth','tomatoes','cream','cloves','thyme','peeled','ginger','beans','soda','basil','mushrooms','apple','parmesan','yogurt','stock','bell','oats','sodium','beef','flakes','carrot','oregano','chocolate','cumin','paprika','sesame','mustard','spinach','corn','potatoes','coconut','carrots','nutmeg','cilantro','raisins','chili','syrup','peas','peanut','almond','walnuts','canned','lime','leaf','pineapple','margarine','cabbage','cucumber','broccoli','cornstarch','zucchini','coriander', 'paste','turkey' ,'banana','almonds' ,'nuts','maple' ,'cheddar' ,'cider' ,'scallions', 'lettuce', 'dill'];
var i = 0;

const Recipe = ({ label, image, ingredients }) => {

    return(
        <div className="recipe">
            <div className="recipeImageRow">
                <img className="image" src={image} alt=""/>
            </div>
            <div className="recipeDetailsRow">
                <h2>{label}</h2>
                <ol className="ol">
                    {ingredients.map( ingredient => (
                        <div key = {i++}>
                            <li>{ingredient.text}</li>
                        </div>
                    ))}
                </ol>
                <button className="moreRecipesBtn" onClick={() => relatedRecipes(ingredients)}>
                    <i className="ellipsis horizontal icon">
                        </i>
                </button>
            </div>
        </div>
    );
}


//get the recipes that are related to this recipe by ingredients
const relatedRecipes = (ingredients) => {
    let keyIngredWords = [];
    let finalArray = [];
    for (let i = 0; i<ingredients.length; i++) {                            //loop every line of ingredient text
        keyIngredWords[i] = (ingredients[i].text.split(' '))  
        for (let j = 0; j<keyIngredWords[i].length; j++) {                  //loop every word
            for (let k = 0; k<basicIngredList.length; k++) {                //compare it with any basic ingredient in list
                if (keyIngredWords[i][j] === basicIngredList[k]) {
                    finalArray.push(keyIngredWords[i][j]);
                }
            }
        }
    }
    //join the strings in the array into one string
    finalArray = finalArray.join(' ');
    console.log(finalArray); 
}



function mapDispatchToProps(dispatch) {
    return {
      getRecipesAction: e => dispatch(getRecipes(e))
    };
  }



export default connect (mapDispatchToProps, {getRecipes}) (Recipe);


