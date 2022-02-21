import { createTypes } from 'redux-recompose';

export const actions = createTypes(['AUTH_INIT', 'AUTH_DONE'], '@@AUTH');

export const authActionCreators = {
    init: () => ({ type: actions.AUTH_INIT }),
    done: () => ({ type: actions.AUTH_DONE })
};
