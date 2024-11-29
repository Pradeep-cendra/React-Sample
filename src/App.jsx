import React from 'react'
import "./App.css"
import EmployeeManager from './EmployeeManager';
import MultiState from './MultiState';
import StateMgm from './StateMgm';

function App() {
  return (
   <div className='container'>   
 
<MultiState/>
<StateMgm/>
   </div>
  )
}

export default App