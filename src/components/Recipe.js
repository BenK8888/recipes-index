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
            </div>
        </div>
    );
}




export default Recipe;