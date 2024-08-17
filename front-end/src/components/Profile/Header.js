import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <ul className="flex justify-between space-x-4 bg-slate-50 py-3 px-3 text-cyan-800">
                <li><Link to="wishlist" className="">Experiences</Link></li>
                <div className="space-x-4">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </ul>

        </div>
    );
}

export default Header