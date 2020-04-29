import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CategoryMealsScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals in the certain category...</Text>
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