import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import  {getRecipes}  from '../actions';




class Nav extends React.Component {
    render(){
        return (
            <div className="navTop">
                <nav>
                    <label for="drop" className="toggle">Food Menu</label>
                    <input type="checkbox" id="drop" />
                        <ul className="menu">
                            <li>
                                <a href="#top" onClick={()=> this.props.getRecipesAction('Meal')}>Meals</a>
                                <ul>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Breakfast')}>Breakfast</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Brunch')}>Brunch</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Lunch')}>Lunch</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Dinner')}>Dinner</a></li>
                                </ul> 
                            </li>
                            <li>
                                <a href="#top" onClick={()=> this.props.getRecipesAction('Salad')}>Salads</a>
                                <ul>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Green Salad')}>Green Salads</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Fruit Salad')}>Fruit Salads</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Pasta Salad')}>Pasta Salads</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Hot Salad')}>Hot Salads</a></li>
                                </ul> 
                            </li>
                            <li><a href="#top" onClick={()=> this.props.getRecipesAction('Meat')}>Meat</a></li>
                            <li><a href="#top" onClick={()=> this.props.getRecipesAction('Fish')}>Fish</a></li>
                            <li>
                                <a href="#top" onClick={()=> this.props.getRecipesAction('Vegan')}>Vegan</a>
                                <ul>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Vegan Bread')}>Vegan Breads</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Vegan Soup')}>Vegan Soups</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Vegan Meat')}>Vegan Meat</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Vegan desert')}>Vegan Desserts</a></li>
                                </ul> 
                            </li>
                            <li>
                                <a href="#top" onClick={()=> this.props.getRecipesAction('Healthy')}>Healthy</a>
                                <ul>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Healthy Lunch')}>Healthy Lunch</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Healthy Salad')}>Healthy Salads</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Healthy Kid')}>Healthy For Kids</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Vegan desert')}>Healthy Desserts</a></li>
                                </ul> 
                            </li>
                            <li><a href="#top" onClick={()=> this.props.getRecipesAction('Gluten Free')}>Gluten Free</a></li>
                            <li>
                                <a href="#top" onClick={()=> this.props.getRecipesAction('Soup')}>Soups</a>
                                <ul>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Vegetables Soup')}>Vegetables Soups</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Chilli Soup')}>Chilli Soups</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Chicken Soup')}>Chicken Soups</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Love Soup')}>Love Soups</a></li>
                                </ul> 
                            </li>
                            <li><a href="#top" onClick={()=> this.props.getRecipesAction('Cookies')}>Cookies</a></li>
                            <li><a href="#top" onClick={()=> this.props.getRecipesAction('Shake')}>Shakes</a></li>
                            <li>
                                <a href="#top" onClick={()=> this.props.getRecipesAction('Drink')}>Drinks</a>
                                <ul>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Lemonade')}>Lemonades</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Cocktail')}>Cocktails</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Coffee')}>Coffee</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Juice')}>Juice</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Liqueur')}>Liqueurs</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Cider')}>Ciders</a></li>
                                    <li><a href="#top" onClick={()=> this.props.getRecipesAction('Tea')}>Tea</a></li>
                                </ul> 
                            </li>
                        </ul>
                </nav>
            </div>
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