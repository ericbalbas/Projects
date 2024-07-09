import React, { useEffect, useState } from "react";
import axios from "axios";
import TableComponent from "../components/TableComponent";
import Loader from "../components/Loader"; 
import { Icon } from "@iconify/react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Student() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/students")
      .then((res) => {
        setStudents(res.data.students);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Name", accessor: "name" },
    { Header: "Course", accessor: "course" },
    { Header: "Email", accessor: "email" },
    { Header: "Phone", accessor: "phone" },
  ];

  if(loading){
    return (
        <div>
            <Loader />
        </div>
    )
  }

  return (
    <div className="p-3">
      <div className="flex justify-between mb-2">
        {/* <Link to="/students/create">back to student</Link> */}
        <h1 className="text-2xl font-bold text-blue-500">Student Records</h1>
        <Button
          name="Add Student"
          link="/students/create"
          icon={<Icon icon="clarity:add-line" className="w-5 h-5 me-1" />}
        />
      </div>
      <TableComponent columns={columns} data={students} />
    </div>
  );
}
