import { MEALS } from '../../data/dummy-data';

const initialState = {
    meals: MEALS,
    filteredMeals:[],
    favoriteMeals:[]
};

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_FAVORITE_MEAL':{
            return {...state, favoriteMeals: [...state.favoriteMeals, action.payload]}            
        }
        default:
            return state;
    }
}