import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { matriz_10, matriz_2_a_3, matriz_4, matriz_5_a_6, matriz_8_a_9, reporte_bgu_1_a_2 } from './utils/routes.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: matriz_8_a_9,
    element: <App />,
  },
  {
    path: matriz_4,
    element: <App />,
  },
  {
    path: matriz_5_a_6,
    element: <App />,
  },
  {
    path: matriz_2_a_3,
    element: <App />,
  },
  {
    path: matriz_10,
    element: <App />,
  },
  {
    path: reporte_bgu_1_a_2,
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
