import React from "react";

export default function Loader() {
  return (
    <div className="h-screen bg-white text-blue-500">
      <div className="flex justify-center items-center h-full">
        <span className="loading loading-dots loading-lg"></span>
        <span className="animate-bounce">loading...</span>
      </div>
    </div>
  );
}
