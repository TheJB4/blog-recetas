import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Administrador from './routes/Administrador/Administrador'
import App from './App'
import Login from './routes/Login/Login'
import Home from './routes/Home/Home'
import RecetaDescription from './routes/RecetaDescription/RecetaDescription'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/:tituloReceta",
        element:<RecetaDescription />
      },
      {
        path:"admin",
        element:<Administrador/>
      },
      {
        path:"login",
        element:<Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
