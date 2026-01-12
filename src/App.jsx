import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorPage from "./pages/error";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
// Import halaman expense jika ada
// import ExpensePage from "./pages/expense"; 

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { user } = useContext(AuthContext);

  const RequireAuth = ({ children }) =>
    user ? children : <Navigate to="/login" />;

  const NotRequireAuth = ({ children }) =>
    user ? <Navigate to="/" /> : children;

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <DashboardPage />
        </RequireAuth>
      ),
      errorElement: <ErrorPage />, // Tambahkan ini agar error tidak putih polos
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignInPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUpPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <BalancePage />
        </RequireAuth>
      ),
    },
    // TAMBAHKAN RUTE INI AGAR TIDAK 404 SAAT KLIK MENU EXPENSE
    {
      path: "/expense", 
      element: (
        <RequireAuth>
          {/* Ganti dengan komponen halaman expense Anda */}
          <DashboardPage /> 
        </RequireAuth>
      ),
    },
  ]);

  return <RouterProvider router={myRouter} />;
}

export default App;