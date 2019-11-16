import * as types from './types';

import { Action } from 'redux';
import { UserState } from './reducer';

export interface UserAction extends Action {
    payload?: UserState;
    error?: any;
}

export const setDevice = (device: string) => ({
    payload: { device },
    type: types.USER_DEVICE_SET,
});
