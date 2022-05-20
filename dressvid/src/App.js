import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Sidebar from "./components/sidebar/sidebar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
