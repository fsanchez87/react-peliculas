import React from "react";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies"
import { BrowserRouter,Switch,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:movieType" component={Movies} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
