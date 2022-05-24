import React from 'react'
import   "./signin.css"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../Context/auth-context"


function Signin() {
    const {LoginHandler}=useAuth()
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [checked,setChecked]=useState(false)
    const inputChange=(e)=>{
        setEmail(e.target.value)

    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const checkChange=(e)=>{
        setChecked(e.target.value)
    }

  return (
    <div> <div class="wrapper-signup">
    <div class='Login'>
        <h2>SignIn</h2>
        <form class='Login-form'>
            <div class='login-form-input'>
                <label for="username">Username</label>
                <input value={email} onChange={inputChange} id='username' type="text" class='form-inp' placeholder='username@gmail.com' />
            </div>
            <div class='login-form-input'>
                <label for="password">Password</label>
                <input  value={password} onChange={passwordChange}id='password' type="text" class='form-inp' placeholder='********' />
            </div>
            <button onClick={(event) => {
              event.preventDefault();LoginHandler({ email: email, password: password })}} type='submit' class='button-container-button primary-button'>SIGNIN</button>
        </form>
    </div>
</div>
</div>
  )
}

export default Signin