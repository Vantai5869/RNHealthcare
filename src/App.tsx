import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import MainNavigation from './navigation/navigation';
import { store } from './stores/index';

const App = () => {
  return (
    <Provider store={store} >
      <View style={styles.container}> 
        <MainNavigation/>
      </View>
    </Provider>
  );
};

export default App;


const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E5E5E5'
  }
})