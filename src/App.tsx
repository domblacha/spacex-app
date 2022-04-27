import { BrowserRouter as Router } from "react-router-dom";

import ApiProvider from "./ApiProvider";
import Routing from "./components/Routing";

import "./App.css";

function App() {
  return (
    <ApiProvider>
      <Router>
        <h1>SpaceX App</h1>
        <Routing />
      </Router>
    </ApiProvider>
  );
}

export default App;
