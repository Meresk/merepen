import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function AppPage() {
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  return (
    <div>
      <h1>User App</h1>
      <p>Here will be Excalidraw boards</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
