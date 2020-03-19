import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import NumberForm from "./components/NumberForm";
import NumberInfo from "./components/NumberInfo";
import { numberReducer as reducer } from "./reducers/numberReducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Numbers</h1>
        <p>Let numbers tell you a tales about themselves</p>
        <NumberForm />
        <NumberInfo />
      </div>
    </Provider>
  );
}

