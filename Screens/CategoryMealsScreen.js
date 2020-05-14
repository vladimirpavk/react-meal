import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';

import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {  

  const onMealPressed = (mealId)=>{
    //console.log(mealId);
    props.navigation.navigate(
      {
        routeName: 'MealDetail',
        params: {
          mealId: mealId
        }
      }
    );
  }  

  let filteredMeals = props.meals.filter(
    (item)=>
    {
      return item.categoryIds.indexOf(props.navigation.getParam('categoryId'))!==-1 ? true : false        
    }
  );

  return (
    <View style={styles.container}>
        <MealList meals={filteredMeals} onMealPressed={onMealPressed} />
    </View>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData)=>{
  const categoryId = navigationData.navigation.getParam('categoryId');
  const categoryTitle = CATEGORIES[CATEGORIES.findIndex((data)=>data.id===categoryId)].name;
  
  return {
    headerTitle: `${categoryTitle} Meals`
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const mapPropsToState = (state)=>{
    return{
        meals: state.meals
    }
}

export default connect(mapPropsToState)(CategoryMealsScreen);