import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

export default function LoginPage() {
  const [loginValue, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    setError("");
    try {
      await login(loginValue, password);
      navigate("/app");
    } catch {
      setError("Invalid credentials");
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="login"
        value={loginValue}
        onChange={(e) => setLogin(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      {error && <p>{error}</p>}

      <hr />

      <button onClick={() => navigate("/admin")}>Admin</button>
    </div>
  );
}
