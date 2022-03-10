import React, {  useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

import './App.css';
import Login from './components/Login';

import AdminNav from './components/AdminNav';



function App() {
  const [adminPage, setadminPage] = useState(false);
  
  const isLogin=localStorage.getItem("isAuth")
  


  return ( 
    <div>
    <Router>
  <div> <Switch>    
  {adminPage || isLogin  ? <AdminNav /> : <Login setadminPage={setadminPage} />}
  {!isLogin && <Login/>} 
  <Route path="/"><AdminNav /> </Route>
  
  </Switch></div> 
</Router>
  </div>
)
}
export default App;
