import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-800 p-4">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div>
            <h1 className="text-white font-bold text-xl">Task Manager</h1>
          </div>
        </Link>
        <div>
          <ul className="flex gap-x-4">
            {isAuthenticated ? (
              <>
                <li>
                  <Link className="text-white">Welcome {user.username}</Link>
                </li>
                <li>
                  <Link to={"/add-task"} className="bg-indigo-500 px-4 py-1 rounded-sm text-white">
                    Add Task
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    onClick={() => {
                      logout();
                    }}
                    className="text-white"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/login"} className="bg-indigo-500 px-4 py-1 rounded-sm text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={"/register"} className=" bg-indigo-500 px-4 py-1 rounded-sm text-white">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
