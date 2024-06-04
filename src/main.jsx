import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { store } from "./redux/store";

export const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

export const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
      {
        element: <RestrictedRoutes />,
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
