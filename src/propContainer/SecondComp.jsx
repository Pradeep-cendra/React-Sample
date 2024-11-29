import React from 'react'

const SecondComp = (props) => {
    const{name,city,area,pincode}=props.name;
  return (
    <div>
    <div>{name}</div>
    <div>{city}</div>
    <div>{area}</div>
    <div>{pincode}</div>
    </div>
  )
}

export default SecondComp