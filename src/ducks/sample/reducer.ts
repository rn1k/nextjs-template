import { combineReducers, Reducer } from 'redux';
import * as types from './types';
import { SampleAction } from './actions';

/**
 * サンプル
 */
export interface SampleState {
    sampleId?: string;
    sampleName?: string;
    sampleNameKana?: string;
    sampleNameEnglish?: string;
    text: string;
    isLoading: boolean;
    neverClicked?: boolean;
}

const initialState: SampleState = {
    isLoading: false,
    neverClicked: true,
    text: 'Loading Done',
};

const sampleReducer: Reducer<SampleState> = (
    state = initialState,
    action: SampleAction,
) => {
    switch (action.type) {
        case types.SAMPLE_REQUEST:
            return {
                ...initialState,
                isLoading: true,
                neverClicked: false,
            };
        case types.SAMPLE_RECEIVE:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };
        case types.SAMPLE_FAILED:
            return {
                ...initialState,
                isLoading: false,
            };
        default:
            return state;
    }
};

const reducer = combineReducers({
    sample: sampleReducer,
});

export default reducer;
