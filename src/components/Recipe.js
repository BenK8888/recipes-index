import '../App.css';
import React from 'react';

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
                <button className="moreRecipesBtn"><i className="ellipsis horizontal icon"></i></button>
            </div>
        </div>
    );
}




export default Recipe;