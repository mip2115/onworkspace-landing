import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import { compose } from "redux";
const middlewares = [thunk];

const store = createStore(
  rootReducer,

  // do this with a dev middleware
  // compose(composeWithDevTools(applyMiddleware(...middlewares)))
  applyMiddleware(...middlewares)
);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </Router>{" "}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
