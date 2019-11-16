import App from 'next/app';
import React from 'react';

import { Store } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../src/store';
import { NextPageContext } from 'next';
import { setDevice } from '~/ducks/user/actions';

interface MyAppProps {
    store: Store;
}

class MyApp extends App<MyAppProps> {
    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    // we can dispatch from here too
    // ctx.store.dispatch({ type: 'FOO', payload: 'foo' });
    const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

    return { pageProps: { ...pageProps } };
};

export default withRedux(createStore)(withReduxSaga(MyApp));
