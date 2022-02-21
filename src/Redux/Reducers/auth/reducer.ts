import { createReducer } from "redux-recompose";
import Immutable  from 'seamless-immutable';
import { actions } from './actions';
import {AuthState} from "Interfaces/reduxInterfaces";

const initialState = {
    initialLoading: false
};

const reducerDescription = {
    [actions.AUTH_INIT]: (state: AuthState) => {
        return {
            ...state,
            initialLoading: true
        }
    },
    [actions.AUTH_DONE]: (state: AuthState) => {
        return {
            ...state,
            initialLoading: false
        }
    }
};

export default createReducer(Immutable(initialState), reducerDescription);
