import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Map, Detail, Restaurants, Cities} from './pages'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function List(){
    return(
        <Stack.Navigator>
          <Stack.Screen name="Cities" component={Cities}/>
          <Stack.Screen name="Restaurants" component={Restaurants}/>
          <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="List" component={List} />
                <Tab.Screen name="Map" component={Map} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router