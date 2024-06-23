import React, { useState } from 'react';
import { StyleSheet, useColorScheme, Switch, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './screens/homescreen';
import MenuScreen from './screens/menuscreen';
import ImageScreen from './screens/ImageScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapScreen from './screens/mapScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(scheme === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
        <Tab.Navigator
          screenOptions={({ navigation }) => ({
            tabBarShowLabel: false,
            headerShown: false,
            headerRight: () => (
              <Switch
                value={isDarkTheme}
                onValueChange={toggleTheme}
                style={{ marginRight: 10 }}
              />
            ),
            tabBarActiveTintColor: isDarkTheme ? "lightblue" : "blue",
            headerStyle: {
              backgroundColor: isDarkTheme ? '#333' : '#fff',
            },
            headerTintColor: isDarkTheme ? '#fff' : '#000',
            tabBarStyle: styles.tabBar
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={30} />
            ),
          }} />
          <Tab.Screen name="menu" component={MenuScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='list-ul' color={color} size={30} />
            )
          }} />
          <Tab.Screen name="image" component={ImageScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='images' color={color} size={30} />
            )
          }} />
          <Tab.Screen name="map" component={MapScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='map-marker-alt' color={color} size={30} />
            )
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 10,
    left: 50,
    right: 50,
    elevation: 0,
    backgroundColor: '#ffccffff',
    borderRadius: 25,
    height: 50,
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
