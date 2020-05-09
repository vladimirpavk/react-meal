import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducers/meals';

import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts = ()=>{
  return Fonts.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return(
      <AppLoading
      startAsync={fetchFonts}
      onFinish={setFontLoaded(true)}
      onError={(errLog)=>console.error(errLog)}/>
    )
  }

  const store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return (
    <Provider store={ store }>
      <MealsNavigator />
    </Provider>
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
