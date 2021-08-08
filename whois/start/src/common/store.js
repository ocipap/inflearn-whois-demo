import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import searchReducer from '../search/state';
import searchSaga from '../search/state/saga';
import { all } from 'redux-saga/effects';

const reducer = combineReducers({
  search: searchReducer,
});
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* rootSaga() {
  yield all([searchSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
