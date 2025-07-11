import React from "react";
import Body from "./components/body";
import Header from "./components/header";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <Header />
      <Body />
    </div>
    </Provider>
  );
};

export default App;
