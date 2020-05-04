import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../data/ColorPalete';

const CategoriesScreen = props => {
  
  const renderGridItem = itemData => { 
    return (      
      <TouchableOpacity
        style={styles.opacityStyle}
        onPress={()=>categoryClicked(itemData.item.id)}>
        <View style={[styles.gridItem, {backgroundColor: `${itemData.item.color}`}]}>
          <Text style={styles.gridItemContent}>{itemData.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const categoryClicked = (categoryId)=>{    
    props.navigation.navigate(
      {
        routeName: 'CategoryMeals',
        params: {
          categoryId:categoryId
        }
      }
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatStyle}
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
    backgroundColor: 'white'
  },
  flatStyle:{
    flex: 1,
    width: '100%'
  },
  gridItem: {
    flex: 1,
    padding: 15,
    margin: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 15
  },
  gridItemContent:{   
    justifyContent: 'center',
    width: '100%',
    color: 'black',
    textAlign: 'right',
    fontWeight: 'bold',
    fontStyle: 'open-sans-bold',
    fontSize: 16
  },
  opacityStyle:{    
    flex: 1,
    padding: 0,
    height: 200
  }
});

export default CategoriesScreen;