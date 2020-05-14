import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

import MealList from '../components/MealList';

const FavoritesScreen = (props) => {
  return (
    <View style={styles.container}>
      <MealList meals={props.favoriteMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5
  }
});

const mapPropsToState = (state)=>{
  return {
    'favoriteMeals': state.favoriteMeals
  }   
}

export default connect(mapPropsToState)(FavoritesScreen);