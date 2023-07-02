import React, { useState } from 'react'
import config from "../config"
import axios from 'axios'
import { useDispatch } from "react-redux";
import { setLogin } from "../state/index";

const Auth=() => {
    const dispatch=useDispatch();
    // const navigate=useNavigate();

    const [isLogin, setIsLogin]=useState(true);
    const [objValue, setObjValue]=useState({})

    const toggleLogin=() => {
        setIsLogin(!isLogin);
    };

    const setData=(event) => {
        const { value, name }=event.target;
        const data={ [name]: value }
        setObjValue({ ...objValue, ...data })
    }

    const handleLogin=async (e) => {
        e.preventDefault()
        // setLoad(true)
        try {
            await axios.post(`${config.API_BASE_URL}/auth/login`, objValue)
                .then((response) => {
                    console.log(response);
                    dispatch(
                        setLogin({
                            user: response.data.user,
                            token: response.data.token
                        })
                    );
                    setObjValue({})
                    // setLoad(false)
                })
        } catch (err) {
            setObjValue({})
            // setLoad(false)
            // setError(err.response.data.msg)
            console.log(err)
        }
    }
    const handleCreateAcc=async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${config.API_BASE_URL}/auth/register`, objValue)
                .then((response) => {
                    console.log(response)
                    dispatch(
                        setLogin({
                            user: response.data.savedUser,
                            token: response.data.token
                        })
                    );
                    setObjValue({})
                    // navigate("/posts");
                    // setLoad(false)
                })

        } catch (err) {
            setObjValue({})
            console.log(err)
        }
    };



    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 bg-white shadow-md rounded p-8">
                <h1 className="text-2xl text-center font-bold mb-4">{isLogin? 'Log In':'Create Account'}</h1>
                <form className="space-y-4" onSubmit={isLogin? handleLogin:handleCreateAcc}>
                    <div>
                        <label htmlFor="username" className="block font-semibold mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder='Username'
                            onChange={setData}
                            name="username"
                            className="w-full border border-gray-300 px-3 py-2 rounded"
                        />
                        {!isLogin? (
                            <>
                                <label htmlFor="email" className="block font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    onChange={setData}
                                    placeholder='email@gmail.com'
                                    name="email"
                                    className="w-full border border-gray-300 px-3 py-2 rounded"
                                />
                            </>
                        ):null}
                        <label htmlFor="password" className="block font-semibold mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder='pass@123'
                            onChange={setData}
                            name="password"
                            className="w-full border border-gray-300 px-3 py-2 rounded"
                        />
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded mt-4">
                            {isLogin? 'Login':'Create Account'}
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4">
                    {isLogin? "Don't have an account yet?":'Already have an account?'}
                    <button
                        type="button"
                        onClick={toggleLogin}
                        className="ml-1 text-blue-500 hover:text-blue-600 font-semibold"
                    >
                        {isLogin? 'Create Account':'Log In'}
                    </button>
                </p>
            </div>
        </div>

    )
}

export default Auth