import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState("");
    const { setAuth } = useContext(AuthContext);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        const form = e.target;
        const identifier = form.identifier.value;
        const pin = form.pin.value;
    
        const loginInfo = identifier.includes('@')
            ? { email: identifier, pin }
            : { phoneNumber: identifier, pin };
    
        try {
            const response = await axios.post("http://localhost:5000/login", loginInfo);
            console.log("Login response:", response.data);
            setAuth(response.data.token);
            localStorage.setItem("token", response.data.token);
            setError("");
        } catch (error) {
            console.error("Login error:", error.response?.data?.message || error.message);
            setError("An error occurred during login");
        }
    };
      

    return (
        <div className="my-[50.5px]">
            <form onSubmit={handleFormSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
                <div className="text-center mb-4">
                    <h2 className="font-bold text-3xl">Login</h2>
                </div>
                {error && <div className="mb-4 text-red-500">{error}</div>}
                <div className="mb-4">
                    <label className="block text-gray-700">Email or Mobile Number:</label>
                    <input
                        type="text"
                        name="identifier"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">5-digit PIN:</label>
                    <input
                        type="number"
                        name="pin"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
                    Submit
                </button>
                <h2 className="text-lg font-medium">Do not have an accoutn? <Link to='/Register' className="btn-link">Register</Link></h2>
            </form>
        </div>
    );
};

export default Login;
