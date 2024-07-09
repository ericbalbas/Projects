import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { SIDEBAR_TOP_NAVIGATION_LIST, SIDEBAR_BOT_NAVIGATION_LIST } from '../../lib/const/navigation';
import SidebarRender from '../render/SidebarRender';
import { useLocation } from 'react-router-dom';
export default function Sidebar() {

  const { pathname } = useLocation;
  return (
    <div className="hidden md:flex md:flex-col bg-blue-500 md:w-60 p-3 text-gray-100">
      <div className="flex items-center gap-2 px-1 py-3">
        <Icon
          icon="ion:logo-firebase"
          className="md:w-9 md:h-9 text-green-300 "
        />
        <span className="text-gray-200 text-lg font-bold ">TopSite.</span>
      </div>
      {/* top navigation */}
      <div className="flex-1 py-8 flex flex-col gap-1">
        {SIDEBAR_TOP_NAVIGATION_LIST.map((item) => (
          <SidebarRender key={item.key} data={item} pathname={pathname} />
        ))}
      </div>

      {/* bot navigation */}
      <div className="flex flex-col gap-1 py-2 border-t">
        {SIDEBAR_BOT_NAVIGATION_LIST.map((item) => (
          <SidebarRender key={item.key} data={item} />
        ))}
      </div>
    </div>
  );
}
