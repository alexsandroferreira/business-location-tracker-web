import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "sonner";

export function App() {
  return (
    <>
    <Toaster richColors closeButton/>
      <RouterProvider router={router} />
    </>
  )
}
