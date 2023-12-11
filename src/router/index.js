import { createBrowserRouter } from "react-router-dom"

import Login from "../pages/Login/Login"
import Layout from "../pages/Layout"
import Stay from "../pages/Stay/Stay"
import Index from "../pages/Index"
import Flight from "../pages/Flight/Flight"
import Attraction from "../pages/Attraction/Attraction"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "stay",
        element: <Stay />,
      },
      {
        path: "flight",
        element: <Flight />,
      },
      {
        path: "attraction",
        element: <Attraction />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
])

export default router
