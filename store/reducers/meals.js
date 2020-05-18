import { MEALS } from '../../data/dummy-data';

const initialState = {
    meals: MEALS,
    filteredMeals:MEALS,
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
        case 'APPLY_FILTERS':{
            //action.payload is filter
            const filters=action.payload;
            console.log(filters);

            let filteredMeals=state.filteredMeals.filter(
                (meal)=>{
                    if(filter.isGlutenFree && !meal.isGlutenFree){
                        return false;
                    }
                    if(filter.isVegan && !meal.isVegan){
                        return false;
                    }
                    if(filter.isVegetarian && !meal.isVegetarian){
                        return false;
                    }
                    if(filter.isLactoseFree && !meal.isLactoseFree){
                        return false;
                    }
                    return true;
                }
            );
            return {
                ...state, filteredMeals:[...filteredMeals]
            }
        }
        default:
            return state;
    }
}