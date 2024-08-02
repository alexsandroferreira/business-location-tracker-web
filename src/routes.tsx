import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Hero } from './pages/app/hero/hero'
import { Home } from './pages/app/home/home'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/hero', element: <Hero /> },
    ],
  },
])
