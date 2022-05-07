import logo from './logo.svg';
import './App.css';
import Homepage from "./components/Homepage/Homepage"
import Description from "./components/Description/Description"
import List from "./components/List/List"
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Description />
      {/* <List /> */}
    </div>
  );
}

export default App;
