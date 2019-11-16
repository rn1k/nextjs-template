import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as reducers from './ducks';
import rootSaga from './sagas';

const rootReducers = combineReducers(reducers);

const bindMiddleware = (middleware: any[]) => {
    if (
        process.env.NODE_ENV !== 'production' &&
        typeof window !== 'undefined'
    ) {
        const { logger } = require('redux-logger');
        middleware.push(logger);
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    const store: any = createStore(
        rootReducers,
        initialState,
        bindMiddleware([sagaMiddleware]),
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore;

export type State = ReturnType<typeof rootReducers>;
