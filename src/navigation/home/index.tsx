import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { IconHome } from '../../assets/theme/icons';
import Home from '../../screens/Home/Home.screen';
import Notification from '../../screens/Notification';


const Navigation = createStackNavigator();

const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
      
    },
  });

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
                  cardStyleInterpolator: forFade,
                })}
            />
        </Navigation.Navigator>
    )
}

  export default HomeTab;
  