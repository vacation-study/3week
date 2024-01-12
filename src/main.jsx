import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Assignment from './pages/Assignment';
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Assignment",
    element: <Assignment />,
    label: 'A'
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
