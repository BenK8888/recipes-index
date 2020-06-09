//RECIPES REDUCER


export default (state = [], action) => {
    switch (action.type) {
        case 'GET_RECIPES':
            return action.payload;
        default:         
            return state;
    }
};