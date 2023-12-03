import { createBrowserRouter } from "react-router-dom"

import Login from "../pages/Login/Login"
import Layout from "../pages/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])

export default router
