import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Aside = () => {
  return (
    <aside
      id="sidebar"
      className="fixed hidden z-10 h-full top-0 left-0 pt-16 flex lg:flex flex-shirnk-0 flex-col w-63 transition-width duration-75"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <div className="lg:hidden">
                  <label htmlFor="mobile-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="email"
                      id="mobile-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </li>
              <li>
                <Link className="text-base font-normal rounded-lg flex items-center hover:bg-gray-100 group px-5 py-1">
                  <Icon
                    icon="mage:dashboard-4-fill"
                    className="text-blue-500"
                  />
                  <span className="ml-3 text-gray-500">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link className="text-base font-normal rounded-lg flex items-center hover:bg-gray-100 group px-5 py-1">
                  <Icon
                    icon="mage:dashboard-4-fill"
                    className="text-blue-500 hover:text-gray-500"
                  />
                  <span className="ml-3 text-gray-500">Students</span>
                </Link>
              </li>
              <li>
                <Link className="text-base font-normal rounded-lg flex items-center hover:bg-gray-100 group px-5 py-1">
                  <Icon
                    icon="mage:dashboard-4-fill"
                    className="text-blue-500 hover:text-gray-500"
                  />
                  <span className="ml-3 text-gray-500">Teachers</span>
                </Link>
              </li>
              <li>
                <Link className="text-base  font-normal rounded-lg flex items-center hover:bg-gray-100 group px-5 py-1">
                  <Icon
                    icon="mage:dashboard-4-fill"
                    className="text-blue-500 hover:text-gray-500"
                  />
                  <span className="ml-3 text-gray-500">Subjects</span>
                </Link>
              </li>
              <li>
                <Link className="text-base  font-normal rounded-lg flex items-center hover:bg-gray-100 group px-5 py-1">
                  <Icon
                    icon="mage:dashboard-4-fill"
                    className="text-blue-500 hover:text-gray-500"
                  />
                  <span className="ml-3 text-gray-500">Classrooms</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
