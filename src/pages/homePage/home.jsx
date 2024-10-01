import React from "react";

const Home = ({ setCurrentPage }) => {
  return (
    <div>
      <input
        type="submit"
        value="Signup"
        onClick={() => setCurrentPage("signup")}
      />
      <input
        type="submit"
        value="Login"
        onClick={() => setCurrentPage("login")}
      />
    </div>
  );
};

export default Home;
