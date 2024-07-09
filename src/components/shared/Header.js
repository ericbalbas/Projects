import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem
} from "@headlessui/react";
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import classNames from "classnames";

export default function Header() {
  return (
    <div className="bg-blue-100 px-3 h-16 flex justify-between items-center">
      {/* search field */}
      <div className="relative">
        <Icon
          icon="f7:search-circle-fill"
          className="text-blue-500 absolute top-1/2 -translate-y-1/2 left-3 h-6 w-6"
        />
        <input
          type="text"
          placeholder="Search key...."
          className="text-sm focus:outline-none active:outline-none h-10 w-[15rem] border border-blue-300 rounded-sm pl-11 pr-4"
        />
      </div>

      {/* side buttons */}
      <div className="flex items-center gap-2 mr-2 text-blue-500">
        <Popover>
          <PopoverButton className="text-sm/6 font-semibold text-blue-500 focus:outline-none data-[active]:text-blue-900 data-[hover]:text-blue-700 data-[focus]:outline-1 data-[focus]:outline-white">
            <Icon icon="flowbite:message-dots-solid" className="w-6 h-6" />
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor={{ to: "bottom end", gap: "4px" }}
              className="rounded-xl bg-blue-500 text-sm/6 absolute mt-2.5"
            >
              <div className="text-white p-3">
                <strong>Messages</strong>
                <p>This is message panel</p>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        <Popover>
          <PopoverButton className="text-sm/6 font-semibold text-blue-500 focus:outline-none data-[active]:text-blue-900 data-[hover]:text-blue-700 data-[focus]:outline-1 data-[focus]:outline-white">
            <Icon icon="ic:sharp-notifications" className="w-6 h-6" />
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor={{ to: "bottom end", gap: "4px" }}
              className="rounded-xl bg-blue-500 text-sm/6 absolute mt-2.5"
            >
              <div className="p-3">
                <strong className="font-semibold">Notifications</strong>
                <p>This panel for notifications</p>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        <Menu>
          <MenuButton className="ml-3 rounded-full focus:outline-none bg-blue-400 focus:ring-2 focus:ring-blue-400 active:ring-2 active:ring-blue-400">
            {({ active }) => (
              <div>
                <span className="sr-only">Open user</span>
                <div
                  className={classNames(
                    active && "bg-blue-900",
                    "w-9 h-9 rounded-full bg-blue-200 bg-cover bg-no-repeat bg-center"
                  )}
                  style={{
                    backgroundImage:
                      "url(https://source.unsplash.com/80x80?face)",
                  }}
                >
                  <span className="sr-only">Eric Balbas</span>
                </div>
              </div>
            )}
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border bg-blue-500 p-1 mt-2 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  {/* <PencilIcon className="size-4 fill-white/30" /> */}
                  Edit
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                    ⌘E
                  </kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  {/* <Square2StackIcon className="size-4 fill-white/30" /> */}
                  Duplicate
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                    ⌘D
                  </kbd>
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  {/* <ArchiveBoxXMarkIcon className="size-4 fill-white/30" /> */}
                  Archive
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                    ⌘A
                  </kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  {/* <TrashIcon className="size-4 fill-white/30" /> */}
                  Delete
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                    ⌘D
                  </kbd>
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
