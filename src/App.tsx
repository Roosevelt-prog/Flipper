import { useState } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home'
import Form from './Form';
import Payment from './Payment';


function App() {
  const [ok, setOk] = useState(true)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/checkout",
      element: <Payment />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
