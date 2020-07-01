import React from 'react';
import '../App.css';


class Nav extends React.Component {
    render(){
        return (
            <div className="navTop">
                <nav>
                    <label htmlFor="drop" className="toggle">Food Menu</label>
                    <input type="checkbox" id="drop" />
                        <ul className="menu">
                            <li>
                                <a href="/menu/Meal" onClick={()=> this.props.getRecipesAction('Meal')}>Meals</a>
                                <ul>
                                    <li><a href="/menu/Breakfast" onClick={()=> this.props.getRecipesAction('Breakfast')}>Breakfast</a></li>
                                    <li><a href="/menu/Brunch" onClick={()=> this.props.getRecipesAction('Brunch')}>Brunch</a></li>
                                    <li><a href="/menu/Lunch" onClick={()=> this.props.getRecipesAction('Lunch')}>Lunch</a></li>
                                    <li><a href="/menu/Dinner" onClick={()=> this.props.getRecipesAction('Dinner')}>Dinner</a></li>
                                </ul> 
                            </li>
                            <li>
                                <a href="/menu/Salad" onClick={()=> this.props.getRecipesAction('Salad')}>Salads</a>
                                <ul>
                                    <li><a href="/menu/Green Salad" onClick={()=> this.props.getRecipesAction('Green Salad')}>Green Salads</a></li>
                                    <li><a href="/menu/Fruit Salad" onClick={()=> this.props.getRecipesAction('Fruit Salad')}>Fruit Salads</a></li>
                                    <li><a href="/menu/Pasta Salad" onClick={()=> this.props.getRecipesAction('Pasta Salad')}>Pasta Salads</a></li>
                                    <li><a href="/menu/Hot Salad" onClick={()=> this.props.getRecipesAction('Hot Salad')}>Hot Salads</a></li>
                                </ul> 
                            </li>
                            <li><a href="/menu/Meat" onClick={()=> this.props.getRecipesAction('Meat')}>Meat</a></li>
                            <li><a href="/menu/Fish" onClick={()=> this.props.getRecipesAction('Fish')}>Fish</a></li>
                            <li>
                                <a href="/menu/Vegan" onClick={()=> this.props.getRecipesAction('Vegan')}>Vegan</a>
                                <ul>
                                    <li><a href="/menu/Vegan Bread" onClick={()=> this.props.getRecipesAction('Vegan Bread')}>Vegan Breads</a></li>
                                    <li><a href="/menu/Vegan Soup" onClick={()=> this.props.getRecipesAction('Vegan Soup')}>Vegan Soups</a></li>
                                    <li><a href="/menu/Vegan Meat" onClick={()=> this.props.getRecipesAction('Vegan Meat')}>Vegan Meat</a></li>
                                    <li><a href="/menu/Vegan desert" onClick={()=> this.props.getRecipesAction('Vegan desert')}>Vegan Desserts</a></li>
                                </ul> 
                            </li>
                            <li>
                                <a href="/menu/Healthy" onClick={()=> this.props.getRecipesAction('Healthy')}>Healthy</a>
                                <ul>
                                    <li><a href="/menu/Healthy Lunch" onClick={()=> this.props.getRecipesAction('Healthy Lunch')}>Healthy Lunch</a></li>
                                    <li><a href="/menu/Healthy Salad" onClick={()=> this.props.getRecipesAction('Healthy Salad')}>Healthy Salads</a></li>
                                    <li><a href="/menu/Healthy Kid" onClick={()=> this.props.getRecipesAction('Healthy Kid')}>Healthy For Kids</a></li>
                                    <li><a href="/menu/Vegan desert" onClick={()=> this.props.getRecipesAction('Vegan desert')}>Healthy Desserts</a></li>
                                </ul> 
                            </li>
                            <li><a href="/menu/Gluten Free" onClick={()=> this.props.getRecipesAction('Gluten Free')}>Gluten Free</a></li>
                            <li>
                                <a href="/menu/Soup" onClick={()=> this.props.getRecipesAction('Soup')}>Soups</a>
                                <ul>
                                    <li><a href="/menu/Vegetables Soup" onClick={()=> this.props.getRecipesAction('Vegetables Soup')}>Vegetables Soups</a></li>
                                    <li><a href="/menu/Chilli Soup" onClick={()=> this.props.getRecipesAction('Chilli Soup')}>Chilli Soups</a></li>
                                    <li><a href="/menu/Chicken Soup" onClick={()=> this.props.getRecipesAction('Chicken Soup')}>Chicken Soups</a></li>
                                    <li><a href="/menu/Love Soup" onClick={()=> this.props.getRecipesAction('Love Soup')}>Love Soups</a></li>
                                </ul> 
                            </li>
                            <li><a href="/menu/Cookies" onClick={()=> this.props.getRecipesAction('Cookies')}>Cookies</a></li>
                            <li><a href="/menu/Shake" onClick={()=> this.props.getRecipesAction('Shake')}>Shakes</a></li>
                            <li>
                                <a href="/menu/Drink" onClick={()=> this.props.getRecipesAction('Drink')}>Drinks</a>
                                <ul>
                                    <li><a href="/menu/Lemonade" onClick={()=> this.props.getRecipesAction('Lemonade')}>Lemonades</a></li>
                                    <li><a href="/menu/Cocktail" onClick={()=> this.props.getRecipesAction('Cocktail')}>Cocktails</a></li>
                                    <li><a href="/menu/Coffee" onClick={()=> this.props.getRecipesAction('Coffee')}>Coffee</a></li>
                                    <li><a href="/menu/Juice" onClick={()=> this.props.getRecipesAction('Juice')}>Juice</a></li>
                                    <li><a href="/menu/Liqueur" onClick={()=> this.props.getRecipesAction('Liqueur')}>Liqueurs</a></li>
                                    <li><a href="/menu/Cider" onClick={()=> this.props.getRecipesAction('Cider')}>Ciders</a></li>
                                    <li><a href="/menu/Tea" onClick={()=> this.props.getRecipesAction('Tea')}>Tea</a></li>
                                </ul> 
                            </li>
                        </ul>
                </nav>
            </div>
        );
    }
};

export default Nav;