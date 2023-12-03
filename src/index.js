import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App"
import { RouterProvider } from "react-router-dom"
import router from "../src/router/index"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)
