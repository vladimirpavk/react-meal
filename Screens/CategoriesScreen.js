import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = itemData => {
  console.log(itemData.item);
  return (
    <View style={[styles.gridItem, {backgroundColor: `${itemData.item.color}`}]}>
      <Text style={styles.gridItemContent}>{itemData.item.name}</Text>
    </View>
  );
};

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatStyle}
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white'
  },
  flatStyle:{
    flex: 1,
    width: '100%'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItemContent:{   
    justifyContent: 'center',
    width: '100%',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'open-sans-bold'
  }
});

export default CategoriesScreen;