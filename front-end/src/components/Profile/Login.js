import React, { useState } from 'react';
import AuthService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        AuthService.login(username, password).then(
            (response) => {
                console.log(response);
                navigate("/profile");
            },
            error => {
                const resMessage = (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
            }
        );
    };

    return (
        <div className="flex justify-center align-middle pt-32">
            <form onSubmit={handleLogin}>
                <div className="flex justify-center">
                    <label htmlFor="username" className="text-sm font-medium text-gray-900 px-2">Email</label>
                    <input
                        type="text"
                        value={username}
                        className="flex-1 border-1 rounded-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="text-sm font-medium text-gray-900 px-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        className="flex-1 border-1 rounded-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="text-cyan-800 px-2">Login</button>
            </form>
            {message && <div>{message}</div>}
        </div>

    );
};

export default Login;
