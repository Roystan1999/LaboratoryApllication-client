import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import AdminNav from './components/AdminNav';



function App() {
  const [adminPage, setadminPage] = useState(false);

  const isLogin = localStorage.getItem("isAuth")


  const updateAdmin = (val) => {
    localStorage.clear();
  }

  return (
    <Router>
      <div>
       <Switch>
        {adminPage || isLogin ? <AdminNav adminPage={adminPage} setadminPage={setadminPage} updateAdmin={updateAdmin()} /> : <Login setadminPage={setadminPage} />}
        
      {!isLogin && <Login/>}
       
      </Switch></div>
    </Router>
  )
}

export default App;
