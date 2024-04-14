import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./components/List";
import ListDetail from "./components/ListDetail";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Dashboard from "../src/components/Dashboard"

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Home />} />
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
