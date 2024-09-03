import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import UnAuthRoute from './protected-routes/UnAuthRoute';
// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/register')));
const AuthCreateStore = Loadable(lazy(() => import('pages/authentication/CreateStore')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: (
    <UnAuthRoute>
      <MinimalLayout />
    </UnAuthRoute>
  ),
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '/register',
      element: <AuthRegister />
    },
    {
      path: '/create-store',
      element: <AuthCreateStore />
    }
  ]
};

export default LoginRoutes;
