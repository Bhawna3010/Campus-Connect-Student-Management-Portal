"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      router.push("/dashboard");
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">

        <Link href="/" className="login-logo">
          🎓 CampusConnect
        </Link>

        <h1>Welcome Back!</h1>
        <p className="login-subtitle">
          Login to access your student portal.
        </p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-submit">
            Login to Dashboard →
          </button>
        </form>

        <p className="login-footer">
          Don't have an account? Contact your administrator.
        </p>

        <Link href="/" className="back-home">
          ← Back to Home
        </Link>

      </div>
    </main>
  );
}
