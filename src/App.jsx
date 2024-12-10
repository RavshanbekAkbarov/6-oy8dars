import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layouts
import MainLayout from "./layouts/MainLayout";

//pages
import {
  About,
  Home,
  Cart,
  Contact,
  Login,
  Register,
  SingleProduct,
} from "./pages";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "product/:id",
          element: <SingleProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
