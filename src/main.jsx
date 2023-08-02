import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './Component/Home/Home'
import AddChocolate from './Component/AddChocolate/AddChocolate'
const router = createBrowserRouter([
  {
    path:'/', element:<Main></Main>, children:[
      {
        path:'/' , element:<Home></Home>
      },
      {
        path:'/addChocolate', element:<AddChocolate></AddChocolate>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
