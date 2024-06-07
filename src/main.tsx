import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.tsx";
import LoginPage from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ProtectedRoute from "./components/routes/protectedRoute.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/login", element: <LoginPage /> }, // Public login route
      { path: "/register", element: <Register /> }, // Public registration route

      // Protected Dashboard route
      {
        path: "/",
        children: [
          {
            path: "/",
            element: (
              <ProtectedRoute authentication>
                {" "}
                <Dashboard />
              </ProtectedRoute>
            ),
          },
        ],
      },

      // Error route (adjusted to redirect to login for a more user-friendly experience)
      {
        path: "*",
        element: <Navigate to="/login" replace />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
