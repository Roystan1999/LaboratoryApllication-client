import axios from "axios";
import React, { useState } from "react"
import {  useHistory } from "react-router-dom"

function Login(props) {
    const history= useHistory();
    const [userDetails, setuserDetails] = useState({
        email: '',
        password: ''
    })

    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')

    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setpasswordError] = useState('')

    

    const login = async (event) => {
// console.log(("btn tigg"));
        event.preventDefault()
   

        const isEmailValid = validateEmail(userDetails.email)
        const isPasswordValid = validatePassword(userDetails.password)

        

        if (isEmailValid && isPasswordValid)
         {
            
            // Programatically navigate
         
          const url="http://localhost:3002/users/login"
          const response= await axios.post(url,userDetails)
          console.log(response)
       
          if (response.data.error===true) {
              window.alert("Invalid email or password");
          } else {
              localStorage.setItem("role",response.data.data.role);

              window.alert("Login Successfull");

              if(response.data.data.role==="admin")
              {
                  localStorage.setItem("isAuth",true)
                  props.setadminPage(true)

              }
          }
            
        } else 
        {
            console.log('not valid');
        }
    }




    const mailexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;


    const validateEmail = (email) => {
        if (mailexp.test(email)) {
            setisEmailValid(true)
            setemailError('')
            return true
        } else {
            setisEmailValid(false)
            setemailError('Please enter valid email')
            return false
        }
    }

    
    const validatePassword = (password) => {
        if (password) {
            setisPasswordValid(true)
            setpasswordError('')
            return true
        } else {
            setisPasswordValid(false)
            setpasswordError('Please enter password')
            return false
        }
    }
    
    const handleChange = (event) => {
        console.log(event.target.name);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] =
            event.target.value
        setuserDetails(userDetailsCopy)
    }

   
    return (
 
        <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" className="img-fluid" alt="Phone image"/>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      <h1>WELCOME BACK</h1>
            
              <form  title="loginBtn" onSubmit={login}>
                <div className="form-outline mb-5">
                  <input type="email" title="loginemail" id="form1Example13" className="form-control form-control-lg" placeholder="example@gmail.com" name="email" onChange={(event) => { handleChange(event)}} value={userDetails.email} />
                  {!isEmailValid ? <span style={{color:'red', fontSize:'14px'}}>{emailError}</span> : null}
      
                </div>
      
                <div className="form-outline mb-4">
                  <input type="password" title="loginpass" id="form1Example23" className="form-control form-control-lg" placeholder="Enter password"   name="password"  onChange={(event) => { handleChange(event) }} value={userDetails.password}  autoComplete="off"  />
                  {!isPasswordValid ? <span style={{color:'red', fontSize:'14px' }}>{passwordError} </span> : null}
      
                </div>
      
      
                <button type="submit"  value="login" className="btn btn-primary btn-lg btn-block" >Sign in</button>
      
              </form>
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default Login



