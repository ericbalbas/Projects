import React from 'react'

export default function Databox( {children} ) {
  return (
    <div className="bg-blue-50 rounded-sm p-4 flex-1 border border-blue-400 flex items-center">
      {children}
    </div>
  );
}
