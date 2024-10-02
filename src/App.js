import React, { useState } from "react";
import Signup from "./pages/signup/signup";
import Welcome from "./pages/welcome/welcome";
import Login from "./pages/login/login";

const App = () => {
  const [currentPage, setCurrentPage] = useState("welcome");

  return (
    <div>
      {currentPage === "welcome" && <Welcome setCurrentPage={setCurrentPage} />}
      {currentPage === "signup" && <Signup setCurrentPage={setCurrentPage} />}
      {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default App;
