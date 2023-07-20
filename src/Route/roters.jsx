import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: 'sabbir',
            element: <h2>sabbir</h2>
        }
      ]
    },
  ]);

export default router