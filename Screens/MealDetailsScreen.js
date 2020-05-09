import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { connect, useSelector } from 'react-redux';

import { MaterialIcons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MaterialIconHeaderButton } from '../components/MaterialIconHeaderButton';
import MealItem from '../components/MealItem';

const MealDetailsScreen = (props) => {  
  
  const mealId = props.navigation.getParam('mealId');
  const mealTemp = props.meals.filter(
    (meal)=>{
      return meal.id===mealId
    }
  );

  const meal=mealTemp[0];

  const ingredientsList = meal.ingredients.map(
    (ingredient)=><Text key={Math.random()} style={styles.item}>{ingredient}</Text>
  );

  const stepsList = meal.steps.map(
    (step)=><Text key={Math.random()} style={styles.item}>{step}</Text>
  );
  
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <MealItem 
          imageUrl={meal.imageUrl}
          mealTitle={meal.title}
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
        />
        <Text style={styles.header}>Ingredients</Text>
        <View style={styles.itemList}>
          {ingredientsList}
        </View>
        <Text style={styles.header}>Steps</Text>
        <View style={styles.itemList}>
          {stepsList}
        </View>
      </View>
    </ScrollView>
  );
}

MealDetailsScreen.navigationOptions = (navigationData)=>{
  const meals = useSelector(state=>state.meals);

  const mealId = navigationData.navigation.getParam('mealId');
  const meal = meals.filter(
    (meal)=>{
      return meal.id===mealId
    }
  )[0];

  return {
    headerTitle: meal.title,
    headerRight: ()=>(
      <HeaderButtons HeaderButtonComponent={MaterialIconHeaderButton}>             
        <Item title="favorite" iconName="favorite-border" onPress={() => alert('search border')} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  scroll:{
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {   
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'open-sans-bold',
    textAlign: 'center'
  },
  itemList:
  {
    marginTop: 5,
    alignItems: 'center'
  },
  item:{
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
    padding: 5,
    marginTop: 5,
    fontStyle : 'open-sans',
    fontWeight: 'bold'
  }
});

const mapPropsToState = (state)=>{
  return{
    meals: state.meals
  }
}

export default connect(mapPropsToState)(MealDetailsScreen);