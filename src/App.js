import logo from './logo.svg';
import './App.css';
import Home from './views/Home/Home';
import NoRoute from './views/Noroute/NoRoute';
import Detailspage from './views/details/Detailspage';
import { Route, Routes, useLocation } from "react-router-dom";


function App() {
  return (
    <div >
      {/* <Home/> */}
      <Routes>
        <Route exact path = "/" element = {<Home/>  } />
        <Route exact path = "/details" element = {<Detailspage/>  } />
        <Route exact path="*" element={<NoRoute/>} />

      </Routes>
    </div>
  );
}

export default App;
