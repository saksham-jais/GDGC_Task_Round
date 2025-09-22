import React, { useState } from "react";
import AuthForm from "./components/Login"; // Adjust path if needed
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [username, setUsername] = useState(localStorage.getItem("username") || null);

  // Called on successful login to store token and username
  const handleLogin = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", user);
    setToken(token);
    setUsername(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken(null);
    setUsername(null);
  };

  return (
    <>
      {!token ? (
        <AuthForm onLogin={handleLogin} />
      ) : (
        <Dashboard token={token} username={username} logout={logout} />
      )}
    </>
  );
}
