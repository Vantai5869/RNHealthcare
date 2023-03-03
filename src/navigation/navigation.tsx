import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home.screen';
import Profile from '../screens/Profile/Profile.screen';
import { IconAppointment, IconBack, IconEmail, IconHome, IconSearch, IconUser } from '../assets/theme/icons';
import Search from '../screens/Search';
import Appointment from '../screens/Appointment';
import Login from '../screens/Login/Login.screen';
import { useAppSelector } from '../hooks/redux';
import { selectAll } from '../stores/user.reducer';

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
                component={Home}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, focused }: any) => {
                    return <IconHome fill={focused ? '#1648CE' : '#929CAD'} />
                  },
                }}
              />
              <Tab.Screen
                name="Search"
                component={Search}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, focused }: any) => {
                    return <IconSearch fill={focused ? '#1648CE' : '#929CAD'} /> //<Icon name={'ios-home'} size={25} color={color} />;
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
