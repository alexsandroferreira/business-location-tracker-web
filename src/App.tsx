import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <>
      <Toaster richColors closeButton />
      <HelmetProvider>
        <Helmet titleTemplate="%s | business.location" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  )
}
