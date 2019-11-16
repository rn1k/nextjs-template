import { all, Effect } from 'redux-saga/effects';
import sampleSagas from './sample';

export default function* rootSaga(): IterableIterator<Effect> {
    yield all([...sampleSagas]);
}
