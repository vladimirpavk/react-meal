import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Favorite meals screen...</Text>
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

export default FavoritesScreen;