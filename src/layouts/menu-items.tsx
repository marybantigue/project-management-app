import { routes } from '@/config/routes'

export type SubMenuItemType = {
  name: string
  href: string
}

export type MenuItem = {
  [key: string]: {
    name: string
    icon: string
    description?: string
    href?: string
    subMenuItems?: SubMenuItemType[]
  }
}

export const menuItems: MenuItem = {
  dashboard: {
    name: 'Dashboard',
    icon: 'home',
    href: routes.dashboard
  },
  projects: {
    name: 'Projects',
    icon: 'calendar',
    href: routes.projects
  },
  tasks: {
    name: 'Tasks',
    icon: 'calendar',
    href: routes.tasks
  },
  kanban: {
    name: 'Kanban Board',
    icon: 'calendar',
    href: routes.kanban
  }
}

export type MenuItemsKeys = keyof typeof menuItems
