import {createStore,applyMiddleware} from "redux"
import createSagaMiddleware from "@redux-saga/core"
import { composeWithDevTools } from "redux-devtools-extension"
import "regenerator-runtime/runtime"

import reducer from "./reducers"
import middleware from "./middlewares"

//^ creating the instance sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(middleware) //* important


