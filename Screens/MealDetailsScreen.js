import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { connect } from 'react-redux';

import { MaterialIcons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MaterialIconHeaderButton } from '../components/MaterialIconHeaderButton';

import MealItem from '../components/MealItem';

const MealDetailsScreen = (props) => {  
  const mealId = props.navigation.getParam('mealId');
  const mealTemp = props.meals.filter((element)=>element.id===mealId);
  const meal = mealTemp[0];

  const [isFavorite, setIsFavorite] = useState(false)  
   
  useEffect(
      ()=>{
        //console.log('meal Effect');
        props.navigation.setParams({mealItem: meal})
      }, [meal]
    );   

  useEffect(
    ()=>{
      //console.log('toggleFavorite Effect');
      props.navigation.setParams({toggleFavorite: props.toggleFavorite})
    }, [props.toggleFavorite]
  );   

  useEffect(
    ()=>{
      //console.log('isFavorite Effect');
      setIsFavorite(props.favoriteMeals.filter((item)=>item.id===meal.id).length===0 ? false : true);
      props.navigation.setParams({isFav: isFavorite})
    }, [isFavorite]
  );

  useEffect(
    ()=>{
      //console.log('toggleFavorite Effect');
      props.navigation.setParams({toggleFavoriteState: setIsFavorite})
    }, [setIsFavorite]
  );  

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
  const mealItem = navigationData.navigation.getParam('mealItem');

  return mealItem ?
  {
    headerTitle: mealItem.title,
    headerRight: ()=>(
      <HeaderButtons HeaderButtonComponent={MaterialIconHeaderButton}>             
        <Item
          title="favorite"
          iconName={navigationData.navigation.getParam('isFav') ? "favorite" : "favorite-border"}
          onPress={
            () =>{
              const toggleFavorites=navigationData.navigation.getParam('toggleFavorite');              
              toggleFavorites(mealItem);
              const toggleFavoriteState=navigationData.navigation.getParam('toggleFavoriteState');
              toggleFavoriteState(!navigationData.navigation.getParam('isFav'));
            }
            } />
      </HeaderButtons>
    )
  }
  :
  {}
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

const mapStateToProps = (state)=>{
  return{
    meals: state.meals,
    favoriteMeals: state.favoriteMeals  
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    toggleFavorite: (favMeal)=>dispatch({type:'TOGGLE_FAVORITE_MEAL', payload:favMeal})  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealDetailsScreen);