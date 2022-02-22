import React, {useEffect} from "react";
import {Center, NativeBaseProvider} from "native-base";
import {colorModeManager} from "../Theme/ColorModeManager";
import {customTheme} from "../Theme/ExtendTheme";
import Switcher from "../Navigators/Switcher";
import useTimeout from "@flaque/use-timeout";
import {useDispatch} from "react-redux";
import {authActionCreators} from "../Redux/Reducers/auth/actions";
import '../Config'

const App = () => {

    const [setTimeoutHook, clearTimeoutHook] = useTimeout();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActionCreators.init());
        setTimeoutHook(() => {
            dispatch(authActionCreators.done());
        }, 1500);
    }, [])

    return (
        <NativeBaseProvider theme={customTheme} colorModeManager={colorModeManager}>
            <Switcher />
        </NativeBaseProvider>
    );
}
export default App;
