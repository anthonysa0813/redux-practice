import React from "react";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import MainPage from "./components/MainPage";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
