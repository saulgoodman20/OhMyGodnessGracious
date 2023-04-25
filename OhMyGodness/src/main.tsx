import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from './routes/home'
import PDF from './routes/pdf'
import Lab3 from './routes/pdf/Lab3'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/pdf",
        element: <PDF />,
      },
      {
        path: "/pdf/3",
        element: <Lab3 />,
      }
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/pdf",
    element: <PDF />,
  },
  {
    path: "/pdf/3",
    element: <Lab3 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
