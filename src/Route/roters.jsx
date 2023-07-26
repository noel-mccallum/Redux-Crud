import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import ProductList from "../components/ProductList";
import ProductDetails from "../components/ProductDetails";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/products',
            element: <ProductList/>
        },
        {
          path: '/products/:productId',
          element: <ProductDetails/>
      }
      ]
    },
  ]);

export default router