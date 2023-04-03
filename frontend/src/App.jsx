import Header from "./components/Header";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";

import { isWalletConnected } from "./services/blockchain";
import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(() => {
    async function demFunc() {
      await isWalletConnected();
    }
    demFunc();
  }, []);

  return (
    <div className="min-h-screen bg-red-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Projects />} />
      </Routes>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
