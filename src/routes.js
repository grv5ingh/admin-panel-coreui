import React from 'react';

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
const Users = React.lazy(() => import('./pages/user/UsersList'));
const User = React.lazy(() => import('./pages/user/User'));
const UserUpdate = React.lazy(() => import('./pages/user/UpdateUser'));
const ClientList = React.lazy(() => import('./pages/clients/ClientList'));
// const UpdateClient = React.lazy(() => import('./pages/clients/UpdateClient'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/user/list/admin', exact: true,  name: 'Users List', component: Users },
  { path: '/user/view/:id', exact: true, name: 'User Details', component: User },
  { path: '/user/create', exact: true, name: 'Create New User', component: UserUpdate },
  { path: '/user/update/:id', exact: true, name: 'Create New User', component: UserUpdate },
  { path: '/client/list', exact: true, name: 'Update User Detail', component: ClientList },
  // { path: '/client/create', exact: true, name: 'Update User Detail', component: UpdateClient },
  // { path: '/client/update/:id', exact: true, name: 'Update User Detail', component: UpdateClient },
];

export default routes;
