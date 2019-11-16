import reducer, { initialState } from './reducer';

import * as types from './types';

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {} as any).user).toEqual(initialState);
    });
    it('should handle USER_DEVICE_SET', () => {
        const target = {
            payload: { device: 'smartphone' },
            type: types.USER_DEVICE_SET,
        };
        expect(reducer({ user: initialState }, target).user).toEqual({
            device: 'smartphone',
        });
    });
});
