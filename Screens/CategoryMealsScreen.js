import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {  

  const onMealPressed = (mealInfo)=>{
    console.log(mealInfo);
  }
  
  const renderListItem = (item)=>{
    return(
      <TouchableOpacity onPress={()=>onMealPressed(item)}>
        <View style={styles.listItem}>
          <ImageBackground
            source={{uri: `${item.item.imageUrl}`}}
            style={styles.listItemImage}>
              <Text
                style={styles.listItemImageText}
                align='center'>
                {item.item.title}
              </Text>
          </ImageBackground>
          <View style={styles.listItemInfo}>
            <Text style={styles.listItemInfoText}>{item.item.duration}</Text>
            <Text style={styles.listItemInfoText}>{item.item.complexity.toUpperCase()}</Text>
            <Text style={styles.listItemInfoText}>{item.item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  let filteredMeals = MEALS.filter(
    (item)=>
    {
      return item.categoryIds.indexOf(props.navigation.getParam('categoryId'))!==-1 ? true : false        
    }
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListStyle}
        keyExtractor={(item, index) => item.id}
        data={filteredMeals}
        renderItem={renderListItem}
        numColumns={1}/>
    </View>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData)=>{
  const categoryId = navigationData.navigation.getParam('categoryId');
  const categoryTitle = CATEGORIES[CATEGORIES.findIndex((data)=>data.id===categoryId)].name;
  
  return {
    headerTitle: `${categoryTitle} Meals`
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  flatListStyle:{
    flex:1
  },
  listItem:{
    width: '100%',
    height: '200px',
    marginTop: 15
  },
  listItemImage:{
    flex: 1,
    justifyContent: 'flex-end'
  },
  listItemImageText:{
    fontWeight: 'bold',
    fontStyle: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  listItemInfo:{
    height: '25px',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(200, 200, 200, 0.3)'
  },
  listItemInfoText:{
    fontWeight: 'bold',
    fontStyle: 'open-sans-bold',
    fontSize: 15
  }
});

export default CategoryMealsScreen;