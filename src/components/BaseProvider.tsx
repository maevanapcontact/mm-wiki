import { Provider } from "react-redux";
import { FunctionComponent } from "react";
import { createStore } from "redux";

import reducer from "../store/reducer";
import { PageProps } from "../interfaces/PageProps";

const store = createStore(reducer);

const BaseProvider: FunctionComponent<Partial<PageProps>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default BaseProvider;
