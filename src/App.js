import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavBar from "./components/NavBar";
import AppRouter from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
