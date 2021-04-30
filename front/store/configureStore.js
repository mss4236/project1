import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer';
import rootSaga from '../saga';

const configureStore = (context) => {
    const sagaMiddleware = createSagaMiddleware();
    const loggerMiddleware = createLogger();

    const middleware = [sagaMiddleware, loggerMiddleware];

    const enhancer = process.env.MODE_ENV === 'production'
        ? compose(applyMiddleware(...middleware))    // 실제 서비스이면
        : composeWithDevTools(applyMiddleware(...middleware));   // 실제 서비스가 아니면

    const store = createStore(rootReducer, enhancer);

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

const wrapper = createWrapper(configureStore, { debug: true });
//debug: process.env.MODE_ENV === 'development'

export default wrapper;