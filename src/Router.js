import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import { Map, Detail, Restaurants, Cities } from './pages'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function List() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cities" component={Cities} />
            <Stack.Screen name="Clinics" component={Restaurants} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Map"
                tabBarOptions={{
                    activeTintColor: '#e91e63',
                }}
            >
                <Tab.Screen 
                    name="List" 
                    component={List}
                    options={{
                        tabBarLabel: 'List',
                        tabBarIcon: ({ color, size }) => (
                          <Icon name="list" color={color} size={size} />
                        ),
                      }}
                 />
                <Tab.Screen 
                    name="Map" 
                    component={Map} 
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size }) => (
                          <Icon name="map" color={color} size={size} />
                        ),
                      }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router