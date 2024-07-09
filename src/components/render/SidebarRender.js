import classNames from 'classnames';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function SidebarRender({data}) {
  const { pathname } = useLocation();
  return (
    <Link
      to={data.path}
      className={classNames(
        pathname === data.path ? "text-blue-50 font-bold" : "text-blue-200",
        pathname === data.path ? "bg-blue-700" : "",
        "flex items-center gap-2 px-3 py-2 hover:bg-blue-700 focus:bg-blue-680 hover:no-underline active:bg-blue-680 rounded-sm text-base"
      )}
    >
      <span className="text-xl">{data.icon}</span>
      {data.label}
    </Link>
  );
}
