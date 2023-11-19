import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: productsData,
      },
      // {
      //   path: "/product/:id",
      //   element: <Product />,
      // },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
