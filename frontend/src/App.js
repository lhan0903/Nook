import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateWhisper from "./pages/CreateWhisper";

function App() {
  return (
    <>
        <Routes>
            <Route path="/login" element={<Login />} />;
            <Route path="/dashboard" element={<Dashboard />} />;
            <Route path="/createWhisper" element={<CreateWhisper />} />;
        </Routes>
    </>
  );
}

export default App;
