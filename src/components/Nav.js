import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import  {getRecipes}  from '../actions';



class Nav extends React.Component {
    render(){
        return (
            <nav>
                <div className="menu">
                    <div className="ui menu" id="menu">
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Meals')}>Meals</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Salads')}>Salads</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Meat')}>Meat</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Fish')}>Fish</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Bread')}>Bread</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Vegan')}>Vegan</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Healthy')}>Healthy</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Gluten free')}>Gluten Free</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Soup')}>Soups</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('drink')}>Drinks</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Cookies')}>Cookies</a>
                        <a className="item" href="#top" onClick={()=> this.props.getRecipesAction('Shake')}>Shakes</a>
                    </div>
                </div>
            </nav>
        );
    }
};


function mapDispatchToProps(dispatch){
    return {
       getRecipesAction : (searchTerm) => {
         dispatch(getRecipes(searchTerm)) 
      }
    }
  }

export default connect (null, mapDispatchToProps) (Nav);