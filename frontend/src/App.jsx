import Header from "./components/Header";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <div className="min-h-screen bg-red-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
