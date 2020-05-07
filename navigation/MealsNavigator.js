import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailsScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';

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

const AppTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions:{
            tabBarIcon: tab=><Ionicons name="ios-restaurant" size={24} color="black" />
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions:{
            tabBarIcon: tab=><Ionicons name="ios-star" size={24} color="black" />
        }
    }
})

export default createAppContainer(AppTabNavigator);