// import React, { useContext } from 'react'
// import NavBar from './Components/NavBar'
// import { UserContext } from './Context/UserContext'
// import TaskBoard from './Components/TaskBoard';

// const App = () => {
//   const {loggedIn}=useContext(UserContext);
//   return (
//     <div >
//       <NavBar/>
//       {loggedIn?<TaskBoard/>:null}

//     </div>
//   )
// }

// export default App


import React, { useContext } from 'react'
import NavBar from './Components/NavBar'
import { UserContext } from './Context/UserContext'
import TaskBoard from './Components/TaskBoard';

// Import ToastContainer and CSS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Make sure your CSS file containing the styles above is imported

const App = () => {
  const { loggedIn } = useContext(UserContext);

  return (
    <div>
      <NavBar />
      {loggedIn ? <TaskBoard /> :
        <div>
          <div className="empty-state">
            <div className="empty-icon text-dark">📋</div>
            <h3 className='text-dark'>Tasker Website</h3>
            <p>First Login to  Add Task</p>
          </div>
        </div>
      }

      {/* Top-centered, pill-styled Toast Container */}
      <ToastContainer
        position="top-center" // Centers the pill at the top of the screen
        autoClose={3000}
        hideProgressBar={true} // Hides the progress bar to keep it a clean capsule shape
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable // Enables swipe/drag to dismiss
        pauseOnHover={false}
        theme="light" // Use light as base, custom CSS styles override the colors
      />
    </div>
  )
}

export default App;
