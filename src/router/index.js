import { createBrowserRouter } from "react-router-dom"
import { Suspense, lazy } from "react"

// 懒加载
const Index = lazy(() => import("../pages/Index/index"))
const Login = lazy(() => import("../pages/Login/Login"))
const Layout = lazy(() => import("../pages/Layout/index"))
const Stay = lazy(() => import("../pages/Stay/Stay"))
const Flight = lazy(() => import("../pages/Flight/Flight"))
const Attraction = lazy(() => import("../pages/Attraction/Attraction"))
const Register = lazy(() => import("../pages/Register/Register"))

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
  {
    path: "/register",
    element: (
      <Suspense fallback={"加载中"}>
        <Register />
      </Suspense>
    ),
  },
])

export default router
