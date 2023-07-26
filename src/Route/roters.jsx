import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import ProductList from "../components/ProductList";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: 'products',
            element: <ProductList/>
        }
      ]
    },
  ]);

export default router