import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { IconHome } from '../../assets/theme/icons';
import Home from '../../screens/Home/Home.screen';
import Notification from '../../screens/Notification';


const Navigation = createNativeStackNavigator();

function HomeTab({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Notification'){
        navigation.setOptions({tabBarVisible: false});
    }else {
        navigation.setOptions({tabBarVisible: true});
    }
}, [navigation, route]);
    return (
        <Navigation.Navigator>
            <Navigation.Screen
               name="Home"
               component={Home}
               options={{
                 headerShown: false,
                //  tabBarIcon: ({ color, focused }: any) => {
                //    return <IconHome fill={focused ? '#1648CE' : '#929CAD'} />
                //  },
               }}
            />
            <Navigation.Screen
                name={'Notification'}
                component={Notification}
                options={({ route }) => ({
                  tabBarVisible:false,
                  gestureEnabled: false,
                  headerTitleAlign:'center',
                  title: 'Thông báo',
                })}
            />
        </Navigation.Navigator>
    )
}

  export default HomeTab;
  