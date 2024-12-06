// import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Username from "./components/Username"
import Password from "./components/Password"
import ProFile from "./components/PorFile"
import Recovery from "./components/Recovery"
import Reset from "./components/Reset"
import Register from "./components/Register"
import PageNotFound from "./components/PageNotFound"

// router routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username>Root Router</Username>
  },
  {
    path: "/register",
    element: <Register>Root Router</Register>
  },
  {
    path: "/password",
    element: <Password>Root Router</Password>
  },
  {
    path: "/profile",
    element: <ProFile>Root Router</ProFile>
  },
  {
    path: "/recovery",
    element: <Recovery>Root Router</Recovery>
  },
  {
    path: "/reset",
    element: <Reset>Root Router</Reset>
  },
  {
    path: "*",
    element: <PageNotFound>Root Router</PageNotFound>
  },
])

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
