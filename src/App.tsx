import React from "react";

import { Header, Footer } from "./components";
import "./index.css";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="flex items-center justify-center">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;
