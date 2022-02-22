import { createReducer } from "redux-recompose";
import Immutable  from 'seamless-immutable';
import { actions } from './actions';
import {Action, ContactsState, IContact} from "../../../Interfaces/reduxInterfaces";
import _ from "lodash";

const initialState = {
    contacts: null
};

const reducerDescription = {
    [actions.ADD_CONTACT]: (state: ContactsState, action: Action<IContact>) => {
        const newContact = action.payload;
        if (_.isEmpty(state.contacts)) {
            return {
                contacts: [newContact]
            }
        }

        let newContacts = _.map(state.contacts, (contact) => {
            // @ts-ignore
            if (!_.isEqual(contact.id, newContact.id)) {
                return contact
            } else {
                return contact
            }
        });
        // @ts-ignore
        newContacts = _.uniqBy([...newContacts, newContact], (contact) => contact.id);
        return {
            ...state,
            contacts: newContacts
        };
    },
    [actions.REMOVE_CONTACT]: (state: ContactsState, action: Action<IContact>) => {
        const newContact = action.payload;
        // @ts-ignore
        let newContactsRemove = state.contacts.filter((contact) => {
            // @ts-ignore
            return !(_.isEqual(contact.id, newContact.id))
        })
        return {
            ...state,
            contacts: (newContactsRemove.length < 1) ? null : newContactsRemove,
        };
    }
};

export default createReducer(Immutable(initialState), reducerDescription);
