import { MEALS } from '../../data/dummy-data';

const initialState = {
    meals: MEALS,
    filteredMeals:{},
    favoriteMeals:{}
};

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}