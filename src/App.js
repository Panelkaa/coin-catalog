import logo from './logo.svg';
import './App.css';
import Homepage from "./components/Homepage/Homepage"
import Description from "./components/Description/Description"
import List from "./components/List/List"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      {/* <Description /> */}
      {/* <List /> */}
  
    <BrowserRouter>
      <Routes>
        <Route path='/Homepage' element={<Homepage />}></Route>
        <Route path='/Description' element={<Description />}></Route>
        <Route path='/List/Bullion-coins' element={<List />}></Route>
        <Route path='/List/Exclusive-coins' element={<List />}></Route>
        <Route path='/List/Commemorative-coins' element={<List />}></Route>
      </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
