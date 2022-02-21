import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reactotronRedux } from 'reactotron-redux'
import {Tron} from "@interfaces/reactotron";

// Console augmentation
declare global {
    interface Console {
        tron: Tron;
    }
}

Reactotron.setAsyncStorageHandler!(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({ name: 'PentaValue Task App' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect(); // let's connect!

console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
};

export default Reactotron
