import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import IncrementScreen from '../screens/IncrementScreen';
import CardScreen from "../screens/CardScreen";
import ModalScreen from "../screens/ModalScreen";
import GameScreen from "../screens/GameScreen";

const Stack = createNativeStackNavigator();

const NavigationList = () =>
{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="Increment" component={IncrementScreen}></Stack.Screen>
                <Stack.Screen name="Card" component={CardScreen}></Stack.Screen>
                <Stack.Screen name="Modal" component={ModalScreen}></Stack.Screen>
                <Stack.Screen name="Game" component={GameScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationList;