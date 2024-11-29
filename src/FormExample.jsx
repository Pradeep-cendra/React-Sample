import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormExample = () => {
const[userName,SetUserName]= useState("")
const[newUserDetails,SetNewUserDetails]= useState("")

const notify = () => toast("Your data saved sucessfully");

const getUserName=(event)=>{

   SetUserName(event.target.value)
}

const userDetails=(e)=>{
    e.preventDefault()
    SetNewUserDetails(userName)
    notify()
}

  return (
<section>
<h2>hello, {newUserDetails}</h2>
<ToastContainer/>
    <div>
        <form onSubmit={userDetails}>
        <input type="text" placeholder='enter your name' onChange={getUserName}></input>
        <br />
        <button type='submit'>Submit</button>

        </form>
    </div>
</section>   
)
}

export default FormExample