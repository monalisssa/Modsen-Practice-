import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import './firebase';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import React from 'react';
const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const store = setupStore();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]);

container.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
