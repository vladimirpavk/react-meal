import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailsScreen';

const MealsNavigator = createStackNavigator({
    'Categories' : CategoriesScreen,
    'CategoryMeals': CategoryMealsScreen,
    'MealDetail': MealDetailScreen
});

export default createAppContainer(MealsNavigator);