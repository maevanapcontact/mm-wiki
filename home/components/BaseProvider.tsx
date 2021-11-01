import { Provider } from "react-redux";
import { FunctionComponent } from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import { PageProps } from "../interfaces/PageProps";
import reducer from "../store/reducer";
import saga from "../store/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

const BaseProvider: FunctionComponent<Partial<PageProps>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default BaseProvider;
