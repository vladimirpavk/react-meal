import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MaterialIconHeaderButton } from '../components/MaterialIconHeaderButton';

import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const meal = MEALS.filter(
    (meal)=>{
      return meal.id===mealId
    }
  );
  
  return (
    <View style={styles.container}>
      <Text>Details of a certain meal...</Text>
    </View>
  );
}

MealDetailsScreen.navigationOptions = (navigationData)=>{
  const mealId = navigationData.navigation.getParam('mealId');
  const meal = MEALS.filter(
    (meal)=>{
      return meal.id===mealId
    }
  )[0];

  return {
    headerTitle: meal.title,
    headerRight: ()=>(
      <HeaderButtons HeaderButtonComponent={MaterialIconHeaderButton}>
        <Item title="search" iconName="favorite" onPress={() => alert('search')} />        
        <Item title="search2" iconName="favorite-border" onPress={() => alert('search border')} />
      </HeaderButtons>
    )
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

export default MealDetailsScreen;