import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Administrador from './routes/Administrador/Administrador'
import App from './App'
import Login from './routes/Login/Login'
import Home from './routes/Home/Home'
import RecetaDescription from './routes/RecetaDescription/RecetaDescription'
import CrearReceta from './routes/CrearReceta/CrearReceta'
import EditarReceta from './routes/EditarReceta/EditarReceta'
import Categoria from './routes/Categoria/Categoria'
import Register from './routes/Register/Register'
import PrivateRoute from './Components/PrivateRoute'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<h1>Hubo un error! 404! <a href="/">Volver al inicio</a> </h1>,
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
        element:(
          <PrivateRoute>
            <Administrador/>
          </PrivateRoute>
        )
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"crearReceta",
        element:<CrearReceta/>
      },
      {
        path:"editarReceta",
        element:<EditarReceta/>
      },
      {
        path:"categoria/:nombreCategoria",
        element:<Categoria/>
      },
      {
        path:"register",
        element:<Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
