import { Dispatch } from 'react';

export interface Action<T = null, P = null, K = null> {
    [key: string]: any;
    type: string;
    target?: string;
    payload?: T;
}

export type DispatcheableAction<T = null, P = null, K = null> = (
    dispatch: Dispatch<Action<T, P, K>>,
    getState: () => State
) => void;

export interface AuthState {
    initialLoading: boolean;
}

export interface IContact {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    company: string;
    picture: string;
}

export interface ContactsState {
    contacts?: Array<IContact>;
}

export interface State {
    auth: AuthState;
    contacts: ContactsState;
}

export interface ReduxObject {
    getState: () => State;
}
