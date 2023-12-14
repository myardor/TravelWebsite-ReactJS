import { createBrowserRouter } from "react-router-dom"
import { Suspense, lazy } from "react"

// import Login from "../pages/Login/Login"
// import Layout from "../pages/Layout"
// import Stay from "../pages/Stay/Stay"
// import Index from "../pages/Index"
// import Flight from "../pages/Flight/Flight"
// import Attraction from "../pages/Attraction/Attraction"

const Index = lazy(() => import("../pages/Index"))
const Login = lazy(() => import("../pages/Login/Login"))
const Layout = lazy(() => import("../pages/Layout"))
const Stay = lazy(() => import("../pages/Stay/Stay"))
const Flight = lazy(() => import("../pages/Flight/Flight"))
const Attraction = lazy(() => import("../pages/Attraction/Attraction"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={"加载中"}>
            <Index />
          </Suspense>
        ),
      },
      {
        path: "stay",
        element: (
          <Suspense fallback={"加载中"}>
            <Stay />
          </Suspense>
        ),
      },
      {
        path: "flight",
        element: (
          <Suspense fallback={"加载中"}>
            <Flight />
          </Suspense>
        ),
      },
      {
        path: "attraction",
        element: (
          <Suspense fallback={"加载中"}>
            <Attraction />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={"加载中"}>
        <Login />
      </Suspense>
    ),
  },
])

export default router
