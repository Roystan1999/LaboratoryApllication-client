import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RegData from './RegData'
// import RegisterEdit from './RegisterEdit';

function Register() {
  const history=useHistory();
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: '',
    password: '',
    role:""
  })

  const [isnameValid, setnameValid] = useState("true")
  const [nameError, setnameError] = useState("")

  const [isEmailValid, setisEmailValid] = useState(true)
  const [emailError, setemailError] = useState('')

  const [isPasswordValid, setisPasswordValid] = useState(true)
  const [passwordError, setpasswordError] = useState('')






  const register = async (event) => {
    event.preventDefault()

    console.log(userDetails);


    const isnameValid = validateName(userDetails.name)
    const isEmailValid = validateEmail(userDetails.email)
    const isPasswordValid = validatePassword(userDetails.password)
    const isRole=userDetails.role;




    if (isnameValid && isEmailValid && isPasswordValid ) {
      // Programatically navigate

    const url="http://localhost:3002/users/register"
    const response=await axios.post(url,userDetails)
    console.log(response)

      if (response.data.error===true) {
        window.alert("Email already exists!");
      } else {
        window.alert("Registration Successfull");
      }
    } else {
      console.log('not valid');
    }
  }


  //*name
  const expr = /^[a-zA-Z_]{3,15}$/;

  const validateName = (name) => {
    if (name && expr.test(name)) {
      setnameValid(true)
      setnameError('')
      return true
    } else if(!name){
      setnameValid(false)
      setnameError('Please enter your first name.')
      return false
    }
    else{
      setnameValid(false)
      setnameError('only characters are allowed ')
    }
  }

  //* email

  const mailexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;

  const validateEmail = (email) => {
    if (mailexp.test(email)) {
      setisEmailValid(true)
      setemailError('')
      return true
    } else {
      setisEmailValid(false)
      setemailError('Please enter an valid email address.')
      return false
    }
  }


  //* password
  const passwordExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  const validatePassword = (password) => {
    if (passwordExp.test(password)) {
      setisPasswordValid(true)
      setpasswordError('')
      return true
    } else {
      setisPasswordValid(false)
      setpasswordError('minimum of 1 lower case letter ,1 upper case letter ,1 numeric character')
      return false
    }
  }


  //handleChange

  const handleChange = (event) => {
    console.log(event.target.name);
    const userDetailsCopy = { ...userDetails }
    userDetailsCopy[event.target.name] = event.target.value
    setuserDetails(userDetailsCopy)
  }

  return (
    <section className="vh-100">
    <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">

 
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <div  style={{position:"relative",bottom:"20px"}}>
  <h1>Registration </h1>
  </div>
          <form title="RegBtn" onSubmit={register}>
            <div className="form-outline mb-5">
              <input type="text" title="Regname"  id="form1Example13" className="form-control form-control-lg" placeholder="username" name="name" onChange={(event) => { handleChange(event) }}  value={userDetails.name}  />
{!isnameValid ? <span style={{color:'red', fontSize:'12px',position:"relative",right:"30px"}}>{nameError}</span> : null}
              
  
            </div>
            <div className="form-outline mb-5">
                <input type="email" title="Regemail" id="form1Example13" className="form-control form-control-lg" placeholder="example@gmail.com" name="email" onChange={(event) => { handleChange(event)}} value={userDetails.email} />
{!isEmailValid ? <span style={{color:'red', fontSize:'12px',position:"relative",right:"30px"}}>{emailError}</span> : null}
               
    
              </div>
  
            <div className="form-outline mb-4">
              <input type="password" title="Regpass" id="form1Example23" className="form-control form-control-lg" placeholder="Enter password"   name="password"  onChange={(event) => { handleChange(event) }} value={userDetails.password}  autoComplete="off"  />
{!isPasswordValid ? <span style={{color:'red', fontSize:'11px',position:"relative",right:"30px"}}>{passwordError}</span> : null}
              
  
            </div>
  
           
<div>
              <select onChange={(event)=>{handleChange(event)}}   value={userDetails.role} name="role" style={{position:"relative",right:"1px",marginBottom:"10px"}}  >
                <option>Role</option>
                <option>Admin</option>
                <option>User</option>
              </select>
</div>
            <button type="submit" value="login" className="btn btn-primary btn-lg btn-block">Sign in</button>
  
          </form>
        </div>
       
        <div className="col-md-8 col-lg-7 col-xl-6">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png"  className="img-fluid"/>
        </div>
    </div>
      </div>
    
  </section>
  )
}

export default Register;


