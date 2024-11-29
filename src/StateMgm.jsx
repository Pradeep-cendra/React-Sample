

import React from 'react'
import { useState,useEffect } from 'react'

const StateMgm = () => {
const[city,setCity]=useState("Hyderabad")

useEffect(
    ()=>{
        if(city==="Hyderabad")
            {
                setCity("Bangalore")
            }
            else
            {
                setCity("Delhi")
            }
    },[])



console.log(city)
  return (
    <div>I Live in {city}</div>
  )
}

export default StateMgm