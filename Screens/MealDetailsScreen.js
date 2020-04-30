import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MealDetailsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Details of a certain meal...</Text>
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

export default MealDetailsScreen;