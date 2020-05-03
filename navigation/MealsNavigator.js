import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailsScreen';

const MealsNavigator = createStackNavigator({
    'Categories' : {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    'CategoryMeals': CategoryMealsScreen,
    'MealDetail': MealDetailScreen
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#4a148c'
          },
          headerTintColor: 'white'
    }
});

export default createAppContainer(MealsNavigator);