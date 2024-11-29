import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Users  from "./pages/Users";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login";
import { AuthProvider } from './context/AuthContext';
import { UsersProvider } from './context/UsersContext';

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
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <UsersProvider>
        <RouterProvider router={router} />
      </UsersProvider>
    </AuthProvider>
  );
}

export default App;
