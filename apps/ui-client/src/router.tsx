import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomePage } from "./pages/home/HomePage"

export function AppRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ])

  return <RouterProvider router={routes}></RouterProvider>
}
