import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { NotificationListener, requestUserPermission } from './helper/pushnotification_helper';
import MainNavigation from './navigation/navigation';
import { store } from './stores/index';

const App = () => {
  useEffect(()=>{
    requestUserPermission();
    NotificationListener();
  },[])
  return (
    <Provider store={store} >
        <MainNavigation />
    </Provider>
  );
};

export default App;

