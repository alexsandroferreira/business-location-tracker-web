import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Hero } from './pages/app/hero/hero'
import { Register } from './pages/app/register/register'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      { path: '/', element: <Register /> },
      { path: '/hero', element: <Hero /> },
    ],
  },
])
