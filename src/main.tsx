import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './routes/Home'
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
