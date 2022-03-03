import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

import ReactDOM from 'react-dom';
import './App.css';
import Login from './components/Login';

import AdminNav from './components/AdminNav';



function App() {
  const [adminPage, setadminPage] = useState(false);
  
  const isLogin=localStorage.getItem("isAuth")
  
  
const updateAdmin=(val)=>{
  localStorage.clear();
  setadminPage(val)
}

  return ( 
    <Router>
  <div> <Switch>    
  {adminPage|| isLogin  ? <AdminNav setadminPage={setadminPage} updateAdmin={updateAdmin} /> : <Login setadminPage={setadminPage} />} 
  <Route path="/"><AdminNav /> </Route>
  
  </Switch></div> 
</Router>
)
}

export default App;
