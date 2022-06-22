import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      {/* <Route path="/" component={HomePage} exact /> */}
      <HomePage />
    </Router>
  );
}

export default App;
