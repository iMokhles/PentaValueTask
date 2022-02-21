import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import {Navigation} from "../Interfaces/navigation";
import Routes from "../Constants/routes";
import statusBarConfig from "../Constants/statusBar";


// Default nav options for all screens
const defaultNavOptions = ({ route }: Navigation) => ({
    headerShown: false
});

export const appStackNavConfig = {
    screenOptions: defaultNavOptions
};

// Default nav options for all screens
export const appScreensNavOptions: Partial<Record<Routes, NativeStackNavigationOptions>> = {
    [Routes.Home]: {},
};

export const statusBarStyles = {
    [Routes.Home]: statusBarConfig.yellowStatusBar,
    default: statusBarConfig.transparentStatusBar
}
