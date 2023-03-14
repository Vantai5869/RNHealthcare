import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { NotificationListener, requestUserPermission } from './helper/pushnotification_helper';
import MainNavigation from './navigation/navigation';
import { store } from './stores/index';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';



const httpLink = createHttpLink({
  uri: 'http://192.168.1.110:3000/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
   onError: (e) => { console.log(e) },
  
});

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

