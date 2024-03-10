import { useNavigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import {useState} from "react";

const Login = ({ setisLoggedIn }) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        // Perform login logic here
        setisLoggedIn(true); // Update isLoggedIn state to true after successful login
        navigate("/dashboard"); // Navigate to the dashboard page after login
    };

    return (
        <div className="container">
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="login-container">
                <button className="btn" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;