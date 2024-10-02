import React, { useState } from "react";

const Signup = ({ setCurrentPage }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password does not match!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExist = users.find((user) => user.username === username);
    if (userExist) {
      alert("username already exists!");
      return;
    }

    users.push({ email, password, username });
    localStorage.setItem("users", JSON.stringify(users));
    setCurrentPage("login");
  };
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <input type="submit" name="signup" value="Signup" />
        <br />
        <input
          type="button"
          name="login"
          value="Login"
          onClick={() => setCurrentPage("login")}
        />
      </form>
    </div>
  );
};

export default Signup;
