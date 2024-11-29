import React from 'react'

import { userData } from './data'

let fruits=["apple","mango"]


console.log(userData)

const SampleArray = () => {
  return (
    <div>{userData.map((user)=>
    {
        return(
            <div>
             <div>{user.username}  and email is {user.email}</div>
           <div>  {user.address.street}</div>
            </div>
        )
    })}
    
    </div>
  )
}

export default SampleArray