import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement:
    children: [
      {
        path: "/",
        element: <Home />,
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
