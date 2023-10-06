import logo from './logo.svg';
import './App.css';
import Logic from './Components/Logic';
import Navbar from './Components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Summary from './Components/Summary';
import { useEffect, useState } from 'react';

function App() {
  const [val, setVal] = useState([])
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
        <Navbar/>
        <Routes>
        <Route path='' element={<Logic onch={(e) => {
          val.push(e)
          setVal(val)
        }} />} />
        <Route path='summary' element={<Summary  val={val}/>} />
        </Routes>
    </div>
  );
}

export default App;
