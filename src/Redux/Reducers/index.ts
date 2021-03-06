import {combineReducers} from "redux";
import { persistReducer } from "redux-persist";
import {configureMergeState } from 'redux-recompose';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth/reducer';
import contacts from './contacts/reducer';

import {
    seamlessImmutableReconciler,
    seamlessImmutableTransformCreator
} from 'redux-persist-seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';
import {State} from "../../Interfaces/reduxInterfaces";

const transformerConfig = {
    whitelistPerReducer: {

    }
};

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'contacts'],
    stateReconciler: seamlessImmutableReconciler,
    transforms: [seamlessImmutableTransformCreator(transformerConfig)]
};

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    blacklist: ['initialLoading'],
}

const contactsPersistConfig = {
    key: 'contacts',
    storage: AsyncStorage,
    blacklist: ['contacts'],
}

configureMergeState((state: ImmutableObject<State>, diff: State) => state.merge(diff));

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth),
    contacts: persistReducer(contactsPersistConfig, contacts),
})

export default persistReducer(persistConfig, rootReducer);
