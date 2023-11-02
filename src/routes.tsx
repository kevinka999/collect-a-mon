import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomePage, BattlePage, SessionPage } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/battle",
    element: <BattlePage />,
  },
  {
    path: "/session",
    element: <SessionPage />,
  },
])

export const AppRouter = () => <RouterProvider router={router} />
