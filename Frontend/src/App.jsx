import React, { useState } from "react";
import AuthForm from "./components/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  // Called on successful login to store token and username
  const handleLogin = (token, user) => {
    setToken(token);
    setUsername(user);
  };

  return (
    <>
      {!token ? (
        <AuthForm onLogin={handleLogin} />
      ) : (
        <Dashboard token={token} username={username} />
      )}
    </>
  );
}
