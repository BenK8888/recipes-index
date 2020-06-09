//ACTIONS


//assign the web apis ID and KEY (retrieved from the https://www.edamam.com/ website) to constant variables so we have access to the api.
const APP_ID = "4cbb07d0";
const APP_KEY = "fec38756e44c4b8c9733c67a786f8559";



//get the list of recipes from the edamam website by the search term the user provided.
//remarks: we write a function inside a function in order to activate the 'thunk' middleware which we need for the asynchronous use of web api requests.
export const getRecipes = (searchTerm) => async (dispatch) => {
    const response = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    //manually dispatching the action since we use a middleware.
    dispatch ({ type: 'GET_RECIPES', payload: data.hits });
}