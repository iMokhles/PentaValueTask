import React, {useEffect, useState} from "react";
import {NavigationContainer, NavigationState} from "@react-navigation/native";
import withLoadable from "../../Components/Loader";
import {useSelector} from "react-redux";
import {State} from "../../Interfaces/reduxInterfaces";
import {Nullable} from "../../Interfaces/globalInterfaces";
import {getActiveRoute, getRoute, navigationRef} from "../../Helpers/NavigatorHelper";
import FlashMessage from "react-native-flash-message";
import AppNavigator from "../AppNavigator";


const Switcher = () => {
    const [routeName, setRouteName] = useState<Nullable<string>>(null);
    const onStateChange = (state?: NavigationState) => {
        const previousRouteName = routeName;
        const currentRouteName = getRoute(state).name;
        if (previousRouteName !== currentRouteName) {
            setRouteName(currentRouteName);
        }
    };

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                setRouteName(getActiveRoute().name);
            }}
            onStateChange={onStateChange}>
            <AppNavigator />
            <FlashMessage
                duration={3000}
                position="top"
            />
        </NavigationContainer>
    );
}

export default withLoadable(() => useSelector((state: State) => state.auth.initialLoading))(Switcher);
