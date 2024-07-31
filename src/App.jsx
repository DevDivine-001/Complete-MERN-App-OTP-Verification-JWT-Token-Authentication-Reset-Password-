// import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// router routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Root Router</div>
  },
  {
    path: "/register",
    element: <div>Root Router</div>
  },
])

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
