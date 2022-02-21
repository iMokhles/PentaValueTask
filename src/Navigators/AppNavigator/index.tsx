import React, { useState } from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {appStackNavConfig} from "../../Config/navigation";
import Routes from "../../Constants/routes";
import {inferRoute} from "../../Utils/navUtils";
import Home from "../../Screens/Home";
import { Host } from 'react-native-portalize';

const Stack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();

function BuildHomeStack() {
    return (
        <HomeStack.Navigator {...appStackNavConfig}>
            {inferRoute(HomeStack)(Routes.Home, Home)}
        </HomeStack.Navigator>
    );
}

function AppNavigator() {
    return (
        <Host>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {inferRoute(Stack)(Routes.HomeStack, BuildHomeStack)}
            </Stack.Navigator>
        </Host>
    );
}

export default AppNavigator;
