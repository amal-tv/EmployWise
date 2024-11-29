import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Users  from "./pages/Users";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import { AuthProvider } from './context/AuthContext';
import { UsersProvider } from './context/UsersContext';
import { EditUser } from "./pages/EditUser";
import { Toaster } from "react-hot-toast"; // Import Toaster

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id/edit',
        element: <EditUser />,
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
