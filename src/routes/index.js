
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import StudentForm from "../pages/StudentForm";
import StudentData from "../pages/StudentData";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/shared/Layout";
import Student from "../pages/Student";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {path : "/", element: <Dashboard/>},
      {path : "/students/create", element: <StudentForm/>},
      {path : "/students", element: <Student/>}
    ],
    errorElement: <Error />,
  },
  {
    path: "/students/create",
    element: <StudentForm />,
    errorElement: <Error />,
  },
  {
    path: "/students/view/:id",
    element: <StudentData />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "/Test",
    element: <h1>HELLO GUYS</h1>,
  },
  {
    path: "/layout",
    element: <Layout />,
  },
]);

export default router;
