import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryMealsScreen = (props) => {
  console.log('Category meals', props.navigation.getParam('categoryId'));

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;