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
        case 'TOGGLE_FAVORITE_MEAL':{
            const favMeal = action.payload;
            const indexOfFavMeal = state.favoriteMeals.findIndex(item=>item.id===favMeal.id);
            //console.log([...state.favoriteMeals.splice(indexOfFavMeal)]);
            return indexOfFavMeal === -1 ?
            {...state, favoriteMeals: [...state.favoriteMeals, action.payload]} :
            {...state, favoriteMeals: 
                [
                    ...state.favoriteMeals.slice(0, indexOfFavMeal-1),
                    ...state.favoriteMeals.slice(indexOfFavMeal+1, state.favoriteMeals.length)
                ]
            }
        }
        default:
            return state;
    }
}