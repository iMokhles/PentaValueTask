/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store} from "./src/Redux/store";
import App from "./src/App";

const AppIndex = () => {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
  );
}

export default AppIndex
