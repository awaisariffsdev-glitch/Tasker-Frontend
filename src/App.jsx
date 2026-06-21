import React, { useContext } from 'react'
import NavBar from './Components/NavBar'
import { UserContext } from './Context/UserContext'
import TaskBoard from './Components/TaskBoard';

const App = () => {
  const {loggedIn}=useContext(UserContext);
  return (
    <div >
      <NavBar/>
      {loggedIn?<TaskBoard/>:null}

    </div>
  )
}

export default App
