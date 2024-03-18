
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import StudentForm from "../pages/StudentForm";
import StudentData from "../pages/StudentData";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/Test",
    element: <h1>HELLO GUYS</h1>,
  },
]);

export default router;
