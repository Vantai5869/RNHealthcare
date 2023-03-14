import { ApolloProvider } from '@apollo/client';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { client } from '../graphqlClient';
import { NotificationListener, requestUserPermission } from './helper/pushnotification_helper';
import MainNavigation from './navigation/navigation';
import { store } from './stores/index';

const App = () => {
  useEffect(()=>{
    requestUserPermission();
    NotificationListener();
  },[])
  return (
    <ApolloProvider client={client}>
      <Provider store={store} >
          <MainNavigation />
      </Provider>
    </ApolloProvider>
  );
};

export default App;

