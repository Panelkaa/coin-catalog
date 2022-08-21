import './App.css';
import Homepage from "./components/Homepage/Homepage"
import Description from "./components/Description/Description"
import List from "./components/List/List"
// import Search from './components/Search/Search';
import Coin from "./components/Coin/Coin"
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search/Search';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/Description' element={<Description />}></Route>
        <Route path="/Coin" element={<Coin />}>
          <Route path=":id" element={<Coin />} />
        </Route>
        <Route path='/List/Bullion-coins' element={<List />}></Route>
        <Route path='/List/Exclusive-coins' element={<List />}></Route>
        <Route path='/List/Commemorative-coins' element={<List />}></Route>
        <Route path='/Search' element={<Search />}></Route>
      </Routes>

    </div>
  );
}

export default App;
