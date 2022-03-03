import React, { useState } from "react"

import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Link, NavLink, Redirect, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import RegData from './RegData'
import Register from './Register'
import UserSamples from './UserSamples'


function AdminNav(props) {

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              Laboratory
            </Link>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">


                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/samples">
                    Samples
                  </NavLink>
                </li>

                <li className="nav-item">  
                  <NavLink className="nav-link" to="/edit">
                    Edit
                  </NavLink>
                </li>

                <li className="nav-item">
                  <Button style={{position: 'relative',left: '130vh'}} onClick={()=>localStorage.clear()}>
                    Logout
                  </Button>
                </li>

              </ul>
            </div>
          </div>

        </nav>
        <Route exact path="/home" component={Home}/>
        <Route path="/register" component={Register} />
        <Route path="/edit" component={RegData} />
        <Route path="/samples" component={UserSamples}/>
        {/* <Route path="/login" component={Login}/> */}

      </Router>



    </div>
  )
}

export default AdminNav