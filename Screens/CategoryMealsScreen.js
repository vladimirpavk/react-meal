import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

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
  
  const renderListItem = (item)=>{
    return(
        <MealItem
        onMealPressed={()=>onMealPressed(item.item.id)}
        imageUrl={item.item.imageUrl}
        mealTitle={item.item.title}
        duration={item.item.duration}
        complexity={item.item.complexity}
        affordability={item.item.affordability} />
    )
  }

  let filteredMeals = MEALS.filter(
    (item)=>
    {
      return item.categoryIds.indexOf(props.navigation.getParam('categoryId'))!==-1 ? true : false        
    }
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListStyle}
        keyExtractor={(item, index) => item.id}
        data={filteredMeals}
        renderItem={renderListItem}
        numColumns={1}/>
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
  },
  flatListStyle:{
    flex:1
  }
});

export default CategoryMealsScreen;