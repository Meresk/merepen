import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AppPage from "./pages/AppPage";
import AdminPage from "./pages/AdminPage";
import { AuthProvider } from "./auth/AuthContext";
import { RequireAuth, RequireAdmin } from "./auth/RequireAuth";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route
            path="/app"
            element={
              <RequireAuth>
                <AppPage />
              </RequireAuth>
            }
          />

          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <AdminPage />
              </RequireAdmin>
            }
          />
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
