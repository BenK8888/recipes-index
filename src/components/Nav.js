import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import  {getRecipes}  from '../actions';


class Nav extends React.Component {
    render(){
        //shorten the syntax for callig the 'getRecipesAction' action for a better looking code
        const { getRecipesAction } = this.props.getRecipesAction;
        return (
            <div className="navTop">
                <nav>
                    <label htmlFor="drop" className="toggle">Food Menu</label>
                    <input type="checkbox" id="drop" />
                        <ul className="menu">
                            <li>
                                <a href="/menu/Meal" onClick={()=> getRecipesAction('Meal')}>Meals</a>
                                <ul>
                                    <li><a href="/menu/Breakfast" onClick={()=> getRecipesAction('Breakfast')}>Breakfast</a></li>
                                    <li><a href="/menu/Brunch" onClick={()=> getRecipesAction('Brunch')}>Brunch</a></li>
                                    <li><a href="/menu/Lunch" onClick={()=> getRecipesAction('Lunch')}>Lunch</a></li>
                                    <li><a href="/menu/Dinner" onClick={()=> getRecipesAction('Dinner')}>Dinner</a></li>
                                </ul> 
                            </li>
                            <li>
                                <a href="/menu/Salad" onClick={()=> getRecipesAction('Salad')}>Salads</a>
                                <ul>
                                    <li><a href="/menu/Green Salad" onClick={()=> getRecipesAction('Green Salad')}>Green Salads</a></li>
                                    <li><a href="/menu/Fruit Salad" onClick={()=> getRecipesAction('Fruit Salad')}>Fruit Salads</a></li>
                                    <li><a href="/menu/Pasta Salad" onClick={()=> getRecipesAction('Pasta Salad')}>Pasta Salads</a></li>
                                    <li><a href="/menu/Hot Salad" onClick={()=> getRecipesAction('Hot Salad')}>Hot Salads</a></li>
                                </ul> 
                            </li>
                            <li><a href="/menu/Meat" onClick={()=> getRecipesAction('Meat')}>Meat</a></li>
                            <li><a href="/menu/Fish" onClick={()=> getRecipesAction('Fish')}>Fish</a></li>
                            <li>
                                <a href="/menu/Vegan" onClick={()=> getRecipesAction('Vegan')}>Vegan</a>
                                <ul>
                                    <li><a href="/menu/Vegan Bread" onClick={()=> getRecipesAction('Vegan Bread')}>Vegan Breads</a></li>
                                    <li><a href="/menu/Vegan Soup" onClick={()=> getRecipesAction('Vegan Soup')}>Vegan Soups</a></li>
                                    <li><a href="/menu/Vegan Meat" onClick={()=> getRecipesAction('Vegan Meat')}>Vegan Meat</a></li>
                                    <li><a href="/menu/Vegan desert" onClick={()=> getRecipesAction('Vegan desert')}>Vegan Desserts</a></li>
                                </ul> 
                            </li>
                            <li>
                                <a href="/menu/Healthy" onClick={()=> getRecipesAction('Healthy')}>Healthy</a>
                                <ul>
                                    <li><a href="/menu/Healthy Lunch" onClick={()=> getRecipesAction('Healthy Lunch')}>Healthy Lunch</a></li>
                                    <li><a href="/menu/Healthy Salad" onClick={()=> getRecipesAction('Healthy Salad')}>Healthy Salads</a></li>
                                    <li><a href="/menu/Healthy Kid" onClick={()=> getRecipesAction('Healthy Kid')}>Healthy For Kids</a></li>
                                    <li><a href="/menu/Vegan desert" onClick={()=> getRecipesAction('Vegan desert')}>Healthy Desserts</a></li>
                                </ul> 
                            </li>
                            <li><a href="/menu/Gluten Free" onClick={()=> getRecipesAction('Gluten Free')}>Gluten Free</a></li>
                            <li>
                                <a href="/menu/Soup" onClick={()=> getRecipesAction('Soup')}>Soups</a>
                                <ul>
                                    <li><a href="/menu/Vegetables Soup" onClick={()=> getRecipesAction('Vegetables Soup')}>Vegetables Soups</a></li>
                                    <li><a href="/menu/Chilli Soup" onClick={()=> getRecipesAction('Chilli Soup')}>Chilli Soups</a></li>
                                    <li><a href="/menu/Chicken Soup" onClick={()=> getRecipesAction('Chicken Soup')}>Chicken Soups</a></li>
                                    <li><a href="/menu/Love Soup" onClick={()=> getRecipesAction('Love Soup')}>Love Soups</a></li>
                                </ul> 
                            </li>
                            <li><a href="/menu/Cookies" onClick={()=> getRecipesAction('Cookies')}>Cookies</a></li>
                            <li><a href="/menu/Shake" onClick={()=> getRecipesAction('Shake')}>Shakes</a></li>
                            <li>
                                <a href="/menu/Drink" onClick={()=> getRecipesAction('Drink')}>Drinks</a>
                                <ul>
                                    <li><a href="/menu/Lemonade" onClick={()=> getRecipesAction('Lemonade')}>Lemonades</a></li>
                                    <li><a href="/menu/Cocktail" onClick={()=> getRecipesAction('Cocktail')}>Cocktails</a></li>
                                    <li><a href="/menu/Coffee" onClick={()=> getRecipesAction('Coffee')}>Coffee</a></li>
                                    <li><a href="/menu/Juice" onClick={()=> getRecipesAction('Juice')}>Juice</a></li>
                                    <li><a href="/menu/Liqueur" onClick={()=> getRecipesAction('Liqueur')}>Liqueurs</a></li>
                                    <li><a href="/menu/Cider" onClick={()=> getRecipesAction('Cider')}>Ciders</a></li>
                                    <li><a href="/menu/Tea" onClick={()=> getRecipesAction('Tea')}>Tea</a></li>
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