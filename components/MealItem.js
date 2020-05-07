import React from 'react';

import {
  TouchableOpacity,
  View,
  ImageBackground,
  Text,
  StyleSheet
} from 'react-native';

const MealItem = (props)=>{
    return(
        <TouchableOpacity onPress={props.onMealPressed}>
        <View style={styles.listItem}>
          <ImageBackground
            source={{uri: `${props.imageUrl}`}}
            style={styles.listItemImage}>
              <Text
                style={styles.listItemImageText}
                align='center'>
                {props.mealTitle}
              </Text>
          </ImageBackground>
          <View style={styles.listItemInfo}>
            <Text style={styles.listItemInfoText}>{props.duration}</Text>
            <Text style={styles.listItemInfoText}>{props.complexity.toUpperCase()}</Text>
            <Text style={styles.listItemInfoText}>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
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

export default MealItem;