import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';

const MealList = (props)=>{
    const renderListItem = (item)=>{
        return(
            <MealItem
            onMealPressed={()=>props.onMealPressed(item.item.id)}
            imageUrl={item.item.imageUrl}
            mealTitle={item.item.title}
            duration={item.item.duration}
            complexity={item.item.complexity}
            affordability={item.item.affordability} />
        )
      }

    return(
        <FlatList
        style={styles.flatListStyle}
        keyExtractor={(item, index) => item.id}
        data={props.meals}
        renderItem={renderListItem}
        numColumns={1}/>
    )
}

const styles = StyleSheet.create({     
  flatListStyle:{
    flex:1
  }
})

export default MealList;