import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import OurCars from './pages/OurCars';
import Services from './pages/Services';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/aboutus",
    element: <AboutUs/>,
  },
  {
    path: "/ourcars",
    element: <OurCars/>,
  },
  {
    path: "/ourservices",
    element: <Services/>,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
