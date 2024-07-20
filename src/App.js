import React,{useEffect} from "react";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoginPage from './LoginPage';
import Checkout from './Checkout.js';
import HomePage from "./HomePage";
import Login from "./Login";
import {useStateValue } from "./StateProvider";
// import {auth} from "./firebase";

import Home from "./Home";
import { useHistory } from "react-router-dom";
// import userModule from './UserModule';
// import { user } from './userModule';


function App() {
   const [{user},dispatch] = useStateValue();
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          {/* /checkout/:someRandomId/page*/ }
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/" element={<HomePage/> } />
          
        </Routes>
        </div>
    </Router>
  );
}

export default App;
