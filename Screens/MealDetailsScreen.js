import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MealDetailsScreen() {
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