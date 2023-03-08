import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { IconAppointment, IconBack, IconEmail, IconHome, IconMessenger, IconUser } from '../assets/theme/icons';
import { useAppSelector } from '../hooks/redux';
import Appointment from '../screens/Appointment';
import Home from '../screens/Home/Home.screen';
import Login from '../screens/Login/Login.screen';
import Messenger from '../screens/Messenger';
import Profile from '../screens/Profile/Profile.screen';
import { selectAll } from '../stores/user.reducer';
import HomeTab from './home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const [isLogin, setIsLogin] = useState(false)
  const users = useAppSelector(selectAll);
  useEffect(() => {
    if (users.length > 0) {
      setIsLogin(true);
    }
  }, [users])
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true
      }}
    >
      {
        isLogin ?
          (
            <>
              <Tab.Screen
                name="Home"
                component={HomeTab}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, focused }: any) => {
                    return <IconHome fill={focused ? '#1648CE' : '#929CAD'} />
                  },
                }}
              />
             
              <Tab.Screen
                name="Appointment"
                component={Appointment}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, focused }: any) => {
                    return <IconAppointment fill={focused ? '#1648CE' : '#929CAD'} /> //<Icon name={'ios-home'} size={25} color={color} />;
                  },
                }}
              />
               <Tab.Screen
                name="Trò chuyện"
                component={Messenger}
                options={{
                  headerShown: true,
                  headerTitleAlign:'center',
                  tabBarIcon: ({ color, focused }: any) => {
                    return <IconMessenger fill={focused ? '#1648CE' : '#929CAD'} /> //<Icon name={'ios-home'} size={25} color={color} />;
                  },
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  headerShown: true,
                  headerLeft: () => <IconBack />,
                  headerRight: () => <IconEmail />,
                  headerTitleAlign: 'center',
                  headerRightContainerStyle: { paddingRight: 15 },
                  headerStyle: { backgroundColor: '#FAFAFE' },
                  tabBarIcon: ({ focused }: any) => {
                    return <IconUser fill={focused ? '#1648CE' : '#929CAD'} /> //<Icon name={'ios-home'} size={25} color={color} />;
                  },
                }}
              />
              {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: any) => {
            return <Icon name={'ios-settings'} size={25} color={color} />;
          },
        }}
      /> */}
            </>
          ) : (
            <Tab.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }: any) => {
                  return <IconHome fill={focused ? '#1648CE' : '#929CAD'} />
                },
                tabBarStyle: (() => { return { display: "none" } })(),
              }}
            />

          )
      }

    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={MyTabs}
        />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
