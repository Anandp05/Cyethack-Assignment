import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homebg from "../../assets/homebg.webp";
import "react-toastify/dist/ReactToastify.css";
import toast, { LoaderIcon } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic (e.g., send credentials to server, validate)
    if (username === "1234" && password === "1234") {
      dispatch(login());
      toast("Logged In Successful");
    } else {
      toast("Unsucesull Please Try Again");
    }
  };

  return (
    <div
      className=" w-full h-full"
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        opacity: "0.8",
      }}
    >
      {!isLoggedIn && (
        <div>
          <h1 className="text-center font-bold text-2xl  mb-4">
            Welcome to Cyethack
          </h1>
          <h1 className="text-xl text-[white] font-bold mb-4">
            This is the Beta version Kindly Enter Username:1234 and
            Password:1234 to login
          </h1>
        </div>
      )}

      {!isLoggedIn && (
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <input
            className="p-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="p-3 rounded-md bg-[black] text-[white]"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading ? "Login" : <LoaderIcon></LoaderIcon>}
          </button>
        </form>
      )}
      {isLoggedIn && (
        <div className="flex flex-col justify-center">
          <h2 className="text-center font-bold text-2xl ">Hello User</h2>
          <button
            className="font-bold  text-center text-xl"
            onClick={() => {
              navigate("/list");
            }}
          >
            Go to the Dashboard!
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
