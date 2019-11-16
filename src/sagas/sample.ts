import { call, put, takeLatest } from 'redux-saga/effects';

import { SampleAction } from '~/ducks/sample/actions';
import * as types from '~/ducks/sample/types';

/** 情報取得 */
export function* loadSampleInfo(action: SampleAction): IterableIterator<any> {
    try {
        const result = yield call(async () => {
            // ここでAPIを呼び出す
            const sleep = (msec: number) =>
                new Promise(resolve => setTimeout(resolve, msec));
            await sleep(1000);
            const payload = { sample: 'sample' };
            return { payload };
        });
        if (result) {
            // 成功した場合はデータを返却する
            yield put({
                type: types.SAMPLE_RECEIVE,
                payload: { isLoading: false },
            });
        } else {
            yield put({ type: types.SAMPLE_FAILED, error: {} });
        }
    } catch (e) {
        yield put({ type: types.SAMPLE_FAILED, error: e });
    } finally {
    }
}

const sampleSagas = [takeLatest(types.SAMPLE_REQUEST, loadSampleInfo)];

export default sampleSagas;
