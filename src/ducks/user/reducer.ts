import { combineReducers, Reducer } from 'redux';
import * as types from './types';
import { UserAction } from './actions';

/**
 * サンプル
 */
export interface UserState {
    device: string;
}

export const initialState: UserState = {
    device: '',
};

const userReducer: Reducer<UserState> = (
    state = initialState,
    action: UserAction,
) => {
    switch (action.type) {
        case types.USER_DEVICE_SET:
            if (action.payload === undefined) {
                return state;
            }
            return {
                ...initialState,
                device: action.payload.device,
            };
        default:
            return state;
    }
};

const reducer = combineReducers({
    user: userReducer,
});

export default reducer;
