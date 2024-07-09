import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import Loader from '../components/Loader';

export default function StudentForm() {
  const navigate = useNavigate();
  const [isLoading,setLoading] = useState(false);
  const [errorMssg, setErrorMssg] = useState([]);
  const [student, setStudent] = useState({
    name : '',
    course : '',
    email : '',
    phone : '',
  })
  
  const handleInput = e => {
    e.persist();
    setStudent({...student, [e.target.name]: e.target.value })
  }

  const saveThisStudent = e => {
    e.preventDefault();
    setLoading(true);
    const data = {...student}
    axios.post(`http://127.0.0.1:8000/api/students`, data).then(
      res => {
      setLoading(false);
        if(res.data.status === 201) {
          Swal.fire({
            title: "Good job!",
            text: "You have succesfully created the data.",
            icon: "success",
          }); 
          
          setStudent({
            name: "",
            course: "",
            email: "",
            phone: "",
          }); 

          navigate('/')
        }
      }
    ).catch(function (error){
      if(error.response){
         setLoading(false);
        if(error.response.status === 422){
          setErrorMssg(error.response.data.mssg);
        }

        if (error.response.status === 500) {
          setLoading(false);
           Swal.fire({
             title: "Error!",
             text: "An error occurred while creating the student.",
             icon: "error",
           });
        }
      }
    });
  }

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold text-blue-500">
          Welcome.
        </h2>
        <form onSubmit={saveThisStudent}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={student.name}
              onChange={handleInput}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
            <span className="text-red-500">{errorMssg && errorMssg.name}</span>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Course</label>
            <input
              id="course"
              type="text"
              name="course"
              value={student.course}
              onChange={handleInput}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
            <span className="text-red-500">
              {errorMssg && errorMssg.course}
            </span>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={student.email}
              onChange={handleInput}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
            <span className="text-red-500">{errorMssg && errorMssg.email}</span>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Phone</label>
            <input
              id="phone"
              type="nunber"
              name="phone"
              value={student.phone}
              onChange={handleInput}
              className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
            <span className="text-red-500">{errorMssg && errorMssg.phone}</span>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              // onClick={}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
