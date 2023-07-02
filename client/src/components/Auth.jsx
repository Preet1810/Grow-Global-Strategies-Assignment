import React, { useState } from 'react'

const Auth=() => {
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

    const handleLogin=(e) => {
        e.preventDefault()
        console.log(objValue);
    }
    const handleCreateAcc=(e) => {
        e.preventDefault()
        console.log(objValue);
    }
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