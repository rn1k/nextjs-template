import * as actions from './actions';
import * as types from './types';

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const device = 'smartphone';
        const expectedAction = {
            type: types.USER_DEVICE_SET,
            payload: { device },
        };
        expect(actions.setDevice(device)).toEqual(expectedAction);
    });
});
