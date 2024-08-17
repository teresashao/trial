import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Profile/Login';
import Register from './components/Profile/Register';
import { AuthProvider } from './context/AuthContext';
import Profile from "./components/Profile/Profile";
import Wishlist from "./components/Experiences/Wishlist";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<Profile /> } />
                        <Route path="/wishlist" element={<Wishlist /> } />
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
