import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from './routes/home'
import PDF from './routes/pdf'

import {
  createHashRouter,
  RouterProvider, createRoutesFromElements, Route
} from "react-router-dom";
import './index.css'
import { CookiesProvider } from 'react-cookie';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/pdf",
//         element: <PDF />,
//       },
//       {
//         path: "/pdf/3",
//         element: <Lab3 />,
//       }
//     ],
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/pdf",
//     element: <PDF />,
//   },
//   {
//     path: "/pdf/3",
//     element: <Lab3 />,
//   },
// ]);
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>,
      <Route index element={<Home />} />,
      <Route path="/pdf" element={<PDF />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>,
)
