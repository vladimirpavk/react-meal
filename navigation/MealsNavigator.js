import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailsScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import FiltersScreen from '../Screens/FiltersScreen';

import { MaterialIcons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MaterialIconHeaderButton } from '../components/MaterialIconHeaderButton';


const MealsStackNavigator = createStackNavigator({
    'Categories' : {
        screen: CategoriesScreen,
        navigationOptions: (navigationData)=>{
            return{
                headerTitle: 'Meal Categories',
                headerLeft: ()=>(
                    <HeaderButtons HeaderButtonComponent={MaterialIconHeaderButton}>             
                        <Item title="favorite" iconName="menu" onPress={()=>navigationData.navigation.toggleDrawer()} />
                    </HeaderButtons>)
            }            
        }},
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

const FiltersStackNavigation = createStackNavigator({
    'Filters': {
        screen: FiltersScreen,
        navigationOptions: (navigationData)=>{
            return{
                headerTitle: 'Filters',
                headerStyle: {
                    backgroundColor: '#4a148c'
                  },
                headerTintColor: 'white',
                headerLeft: ()=>(
                    <HeaderButtons HeaderButtonComponent={MaterialIconHeaderButton}>             
                        <Item title="favorite" iconName="menu" onPress={()=>navigationData.navigation.toggleDrawer()} />
                    </HeaderButtons>)
            }            
        }},
});

const FavoritesStackNavigation = createStackNavigator({
    'Favorites' : {
        screen: FavoritesScreen,
        navigationOptions: (navigationData)=>{
            return{
                headerTitle: 'Favorite Meals',
                headerStyle: {
                    backgroundColor: '#4a148c'
                  },
                headerTintColor: 'white'                
            }
        }
    }
})

const AppTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsStackNavigator,
        navigationOptions:{
            tabBarIcon: tab=><Ionicons name="ios-restaurant" size={24} color="black" />
        }
    },
    Favorites: {
        screen: FavoritesStackNavigation,
        navigationOptions:{
            tabBarIcon: tab=><Ionicons name="ios-star" size={24} color="black" />
        }
    }
});

const drawer = createDrawerNavigator({
    Meals: AppTabNavigator,
    Filters: FiltersStackNavigation
});

export default createAppContainer(drawer);