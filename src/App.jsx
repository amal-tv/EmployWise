import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { UsersProvider } from './context/UsersContext';
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
import Users from "./pages/Users";
import Login from "./pages/Login";
import {EditUser} from "./pages/EditUser";
import AppLayout from "./layouts/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/users',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/users',
            element: <Users />
          },
          {
            path: '/users/:id/edit',
            element: <EditUser />
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <UsersProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </UsersProvider>
    </AuthProvider>
  );
}

export default App;