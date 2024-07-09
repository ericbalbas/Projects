import React from 'react'
import Databox from './render/Databox'
import { Icon } from '@iconify/react/dist/iconify.js'
export default function DataCounts() {
  return (
    <div className="flex gap-4 w-full">
      <Databox>
        <div className="rounded-full text-gray-100 bg-sky-500 h-12 w-12 flex items-center justify-center">
          <Icon icon="mdi:account-student" className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Student
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              123456
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </Databox>

      <Databox>
        <div className="rounded-full text-gray-100 bg-green-500 h-12 w-12 flex items-center justify-center">
          <Icon icon="mdi:teacher" className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Teachers
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              123456
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </Databox>
      <Databox>
        <div className="rounded-full text-gray-100 bg-yellow-500 h-12 w-12 flex items-center justify-center">
          <Icon icon="ph:users-fill" className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Users</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              123456
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </Databox>
      <Databox>
        <div className="rounded-full text-gray-100 bg-orange-500 h-12 w-12 flex items-center justify-center">
          <Icon
            icon="majesticons:money-minus-line"
            className="text-2xl text-white"
          />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Revenue
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              123456
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </Databox>
    </div>
  );
}


