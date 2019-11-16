import * as types from './types';
import { Action } from 'redux';
import { SampleState } from './reducer';

export interface SampleAction extends Action {
    payload?: SampleState;
    request?: {
        sampleId: string;
    };
    error?: any;
}

export const requestSample = (sampleId: string): SampleAction => ({
    request: {
        sampleId,
    },
    type: types.SAMPLE_REQUEST,
});
