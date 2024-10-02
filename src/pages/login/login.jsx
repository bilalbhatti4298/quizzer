import { useState } from "react";

const Login = ({ setCurrentPage }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentPage("home");
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          id="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" name="Login" value="Login" />
        <br />

        <input
          type="submit"
          name="Signup"
          value="Signup"
          onClick={() => setCurrentPage("signup")}
        />
      </form>
    </div>
  );
};

export default Login;
