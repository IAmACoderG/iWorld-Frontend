import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import Contact from "./components/Contact";
import About from "./components/About";
import AddNote from "./components/AddNote";
import Banner from "./components/Banner"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Banner />
      },
      {
        path: "/home",
        element: <AddNote />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/contact-us",
        element: <Contact />
      },
      {
        path: "/about-us",
        element: <About />
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
