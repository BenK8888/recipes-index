import '../App.css';
import React from 'react';
import { connect } from 'react-redux';
import  {getRecipe}  from '../actions';
//withBrowser is used for getting data from the match property
import { withRouter } from 'react-router-dom';

var i =0;

class RecipePage extends React.Component {
    componentDidMount() {
        //get only the needed recipe by providing the needed  search terms('match' and location properties are passed automatically)
        this.props.getRecipe(this.props.location.state.searchTerm, this.props.match.params.label);
        //console.log(this.props.location.state.searchTerm + ' | ' + this.props.match.params.label) ;
    }


    render() {
        const { recipe } = this.props.recipe;
        if (recipe === undefined) {
            return null;
        }
        return(     
            <div className="recipePage">
                <div>  
                    <label>{recipe.label}</label>
                    <div className="recipePageImgDiv">
                        <img src={recipe.image} alt=""/>
                    </div>
                    <div className="recipePageList">
                        <ol className="ol">
                            {recipe.ingredients.map( ingredient => (
                                <div key = {i++}>
                                    <li>{ingredient.text}</li>
                                </div>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
    
}




const mapStateToProps = (state) => {
    return { recipe : state.recipe };
    
}

export default withRouter(connect(mapStateToProps, {getRecipe})(RecipePage));