import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./components/List";
import ListDetail from "./components/ListDetail";
import  { Toaster } from 'react-hot-toast';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    document.cookie.includes("isLoggedIn=true")
  );

  useEffect(() => {
    const checkLoginStatus = () => {
      const isLoggedInFromCookie = document.cookie.includes("isLoggedIn=true");
      setIsLoggedIn(isLoggedInFromCookie);
    };

    checkLoginStatus();
  }, [isLoggedIn]); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/list"
          element={isLoggedIn ? <List /> : <Navigate to="/" />}
        />
        <Route
          path="/list/details"
          element={isLoggedIn ? <ListDetail /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
