import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {  
 
  const navigateMealDetail = ()=>{
    props.navigation.navigate('MealDetail');
  }

  return (
    <View style={styles.container}>
      <Text>Category meals screen</Text>
      <Button title="GO TO MEAL DETAIL" onPress={navigateMealDetail} />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;