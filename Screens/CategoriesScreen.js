import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoriesScreen = (props) => {
  console.log(props);

  const navigateMeals = ()=>{
    props.navigation.navigate({routeName: 'CategoryMeals'})
  }

  return (
    <View style={styles.container}>
      <Text>Categories screen</Text>
      <Button title="Go to meals screen" onPress={navigateMeals} />
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

export default CategoriesScreen;