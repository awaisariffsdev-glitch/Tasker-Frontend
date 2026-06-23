import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom'
import UserProvider from './Context/UserContext.jsx';
import TaskProvider from './Context/TaskContext.jsx';
import TaskProviderDelete from './Context/TaskContextDelete.jsx';
import { TaskContextUpdate } from './Context/TaskContextUpdate.jsx';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <UserProvider>
    <TaskProvider>
      <TaskContextUpdate>

        <TaskProviderDelete>

          <BrowserRouter >
            <App />
          </BrowserRouter>

        </TaskProviderDelete>
      </TaskContextUpdate>
    </TaskProvider>
  </UserProvider>
  // </StrictMode>,
)
