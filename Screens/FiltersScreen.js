import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';

const FilterSwitch = (props)=>{
  return(
    <View style={styles.FilterSwitch}>
      <Text style={styles.FilterSwitchTitle}>{props.title}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={props.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={props.toggleSwitch}
        value={props.isEnabled}/>
    </View>
  )
}

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree]=useState(false);
  const [isLactoseFree, setIsLactoseFree]=useState(false);
  const [isVegan, setIsVegan]=useState(false);
  const [isVegetarian, setIsVegetarian]=useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Available Filters / Restrictions</Text>
      <FilterSwitch
        title="Gluten-free"
        isEnabled={isGlutenFree}
        toggleSwitch={()=>setIsGlutenFree(oldValue=>!oldValue)}
      />     
      <FilterSwitch
        title="Lactose-free"
        isEnabled={isLactoseFree}
        toggleSwitch={()=>setIsLactoseFree(oldValue=>!oldValue)}
      />     
      <FilterSwitch
        title="Vegan"
        isEnabled={isVegan}
        toggleSwitch={()=>setIsVegan(oldValue=>!oldValue)}        
      />     
      <FilterSwitch
        title="Vegetarian"
        isEnabled={isVegetarian}
        toggleSwitch={()=>setIsVegetarian(oldValue=>!oldValue)}
      />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  FilterSwitch:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 30,
    marginTop: 20
  },
  FilterSwitchTitle:{
    fontStyle: 'open-sans',
    fontSize: 15
  },
  screenTitle:{
    marginTop: 30,
    fontWeight: 'bold',
    fontStyle: 'open-sans-bold',
    fontSize: 20
  }
});

export default FiltersScreen;