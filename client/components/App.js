import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "../reducers";
import setAuthorizationToken from "../utils/setAuthorizationToken";
//import jwt from "jwt-simple";
import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";
import { setCurrentUser } from "../actions/authActions";
import Header from "./header";
import Routes from "../routes";

const store = createStore(
  Reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
