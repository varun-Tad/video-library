import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Sidebar from "./components/sidebar/sidebar";
import Explorepage from "./pages/Explorepage/Explorepage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explorepage />} />
      </Routes>
    </div>
  );
}

export default App;
