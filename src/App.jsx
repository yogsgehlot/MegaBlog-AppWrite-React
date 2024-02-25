import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? null : (
    <div className="min-h-screen flex flex-wrap justify-center content-between border-spacing-5 ">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full">
        <main className="w-full  bg-white ">
          <Outlet />
        </main>
      </div>
      <div className="w-full mb-0">
        <Footer />
      </div>
    </div>
  ) ;
}

export default App;
