import React, { ReactNode } from 'react';
import { CommonActions } from '@react-navigation/native';
import Routes from "../Constants/routes";
import {appScreensNavOptions} from "../Config/navigation";
import {Navigation} from "../Interfaces/navigation";


export function inferRoute(NavigationStructure: any) {
    return function screenComponent(screenName: Routes, component: ReactNode) {
        return (
            <NavigationStructure.Screen
                name={screenName}
                component={component}
                options={appScreensNavOptions[screenName]}
            />
        );
    };
}

export const onResetStack = (
    navigation: Navigation['navigation'],
    nextRoutes: { name: string; params?: any }[],
    initialRoute = Routes.Home
) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: initialRoute }, ...nextRoutes]
        })
    );
};
