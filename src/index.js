import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet } from "react-router-dom";
// importer éléments router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// page erreur
import ErrorPage from "./error-page";

import App from "./pages/Home";
import Aprop from "./pages/Apropos"
import FormHousing from './pages/form-housing';
import Header from './components/Header'
import Footer from './components/Footer'
import './index.scss'

import reportWebVitals from './reportWebVitals';

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
      {
        element: <Layout/>,
        errorElement: <ErrorPage />,
        children:[

      {
        path: "/",
        element: <App />,
      },
      {
        path: "/Apropos",
        element: <Aprop />
      },
      {
        path: "/form-housing/:housingId",
        element: <FormHousing />
      }
    ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();