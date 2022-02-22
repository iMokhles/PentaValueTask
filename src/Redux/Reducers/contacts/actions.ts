import { createTypes } from 'redux-recompose';
import {Action, IContact, State} from "../../../Interfaces/reduxInterfaces";
import {Dispatch} from "react";

export const actions = createTypes(['ADD_CONTACT', 'REMOVE_CONTACT'], '@@AUTH');

export const contactsActionCreators = {
    addContact: (contact: IContact) => (
        dispatch: Dispatch<Action<IContact>>,
        getState: () => State) => {

        dispatch({
            type: actions.ADD_CONTACT,
            payload: contact
        })
    },
    removeContact:(contact: IContact) => (
        dispatch: Dispatch<Action<IContact>>,
        getState: () => State) => {

        dispatch({
            type: actions.REMOVE_CONTACT,
            payload: contact
        })
    },
};
