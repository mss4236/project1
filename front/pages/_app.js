import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import reducer from '../reducer';
import { Helmet } from 'react-helmet';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';

// Component는 요청한 페이지 : GET요청을 보내면 Component props로 내려온다
const NodeBird = ({ store, Component }) => {
    return (
        <>
            <Provider store={store}>
                {/* <Helmet>

                </Helmet> */}
                <Head>
                    <title>PKM-Web</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        charset="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />
                </Head>
                <AppLayout>
                    <Component />
                </AppLayout>
            </Provider>
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
    store: PropTypes.object.isRequired,
};

// next - react+redux 설정  (middleware:적용할 미들웨어 / enhancer:미들웨어에 대한 설정)
const configureStore = (initialState, options) => {
    // next-redux-saga
    const sagaMiddlewares = createSagaMiddleware(); // 리덕스 사가 생성

    // next-redux
    const middlewares = [sagaMiddlewares];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))  // 실제 서비스 이면
        : composeWithDevTools(applyMiddleware(...middlewares)); // 실제 서비스 아니면
    const store = createStore(reducer, initialState, enhancer);

    // next-redux-saga
    store.sagaTask = sagaMiddlewares.run(rootSaga);  // store에 rootSaga를 넣은 sagaMiddlewares를 실행시켜준다

    return store;
};

export default withRedux(configureStore)(withReduxSaga(NodeBird));