import 'babel-polyfill';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

//  import todosReducer from '$redux/user/reducer'; //  import reducer
//  import todosSaga from '$redux/user/sagas'; // import saga

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const todosPersistConfig = {
  key: 'user',
  storage,
};

const composeEnhancers = typeof window === 'object'
  && (<any> window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (<any> window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const store = createStore(
  combineReducers({
    user: persistReducer(todosPersistConfig, userReducer),
  //  githubProjects: githubProjectsReducer,
    router: connectRouter(history),
  }),
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
  ),
);
const persistor = persistStore(store);

sagaMiddleware.run(userSaga);

export default () => ({ store, persistor });
