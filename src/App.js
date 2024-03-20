import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavBar from "./components/NavBar";
import AppRouter from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <NavBar />
          <AppRouter />
        </BrowserRouter>
      </DndProvider>
    </Provider>
  );
}

export default App;
