import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/tiendaReducer";

const App = () => {
  const store = createStore(reducer);
  console.log(store.getState());

  return (
    <Provider store={store}>
      <h1>jiji</h1>
    </Provider>
  );
};

export default App;
