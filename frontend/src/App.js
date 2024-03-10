import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import View from "./pages/View";
import History from "./pages/History";
import NavBar from "./components/NavBar";
import {useEffect, useState} from "react";

function App() {
    const navigate = useNavigate();
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        } else {
            navigate("/dashboard");
        }
    }, []);

  return (
    <>
        <Routes>
            <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}/>} />;
            <Route path="/dashboard" element={<Dashboard />} />;
            <Route path="/create" element={<Create />} />;
            <Route path="/view" element={<View />} />;
            <Route path="/history" element={<History />} />;
        </Routes>
    </>
  );
}

export default App;
