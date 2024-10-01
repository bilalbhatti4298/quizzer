import React, { useState } from "react";
import Home from "./pages/homePage/home";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "signup" && <Signup setCurrentPage={setCurrentPage} />}
      {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default App;
