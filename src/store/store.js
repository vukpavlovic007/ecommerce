import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user", "categories"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(Boolean);

const composeEnchancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnchancers = composeEnchancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnchancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
