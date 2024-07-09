

import React from 'react'
import Home from "./pages/Home";
import StudentForm from './pages/StudentForm';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './components/shared/Sidebar';
import Header from './components/shared/Header';

export default function App() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar/>
      <div className='flex-1'>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
