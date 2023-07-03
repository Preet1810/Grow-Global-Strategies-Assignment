import React from 'react';
import { setLogout } from '../state';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
const Navbar=() => {
    const dispatch=useDispatch();
    return (
        <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
            <div className="text-white text-lg font-bold">Posts Application</div>
            <div>
                <Link to="createpost">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Create Post</button>
                </Link>
                <button onClick={() => dispatch(setLogout())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
