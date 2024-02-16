import React from "react";
import { Provider } from "react-redux";
import {store} from "./Store";
import {TooDoo} from "./TooDoo";

const App = () => {
  return (
      <Provider store={store}>
        <TooDoo />
      </Provider>
  );
};
export default App;