import { Icon } from "@iconify/react/dist/iconify.js"


export const SIDEBAR_TOP_NAVIGATION_LIST = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <Icon icon="mdi:view-dashboard-variant" />,
  },
  {
    key: "student",
    label: "Student",
    path: "/students",
    icon: <Icon icon="ph:student-fill" />,
  },
  {
    key: "classes",
    label: "Classes",
    path: "/classes",
    icon: <Icon icon="fluent:conference-room-20-filled" />,
  },
  {
    key: "statistics",
    label: "Statistics",
    path: "/statistics",
    icon: <Icon icon="mdi:report-timeline-variant" />,
  },
  {
    key: "message",
    label: "Messages",
    path: "/message",
    icon: <Icon icon="icon-park-solid:message-one" />,
  },
];

export const SIDEBAR_BOT_NAVIGATION_LIST = [
  {
    key: "logout",
    label: "Log out",
    path: "/logout",
    icon: <Icon icon="solar:logout-3-bold" />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <Icon icon="ri:settings-fill" />,
  },
];