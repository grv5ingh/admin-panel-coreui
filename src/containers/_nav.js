import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Product Management']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Clients',
    to: '/client/list',
    icon: 'cil-user'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['User Management']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Admin Users',
    to: '/user/list/admin',
    icon: 'cil-user'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Orders',
    to: '/users/list/crm',
    icon: 'cil-user'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Role Access',
    to: '/user/role/list',
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Subscription Management',
    to: '/subscription/list',
    icon: 'cil-user'
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Settings']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Account Settings',
    to: '/admin-settings',
    icon: 'cil-settings'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Admin Settings',
    to: '/admin-settings',
    icon: 'cil-settings'
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
