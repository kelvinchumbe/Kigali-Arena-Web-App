import React from "react";
import "./css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainComponent from "./MainComponent";
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MainComponent />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
