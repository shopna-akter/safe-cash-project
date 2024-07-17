import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [error, setError] = useState("");
    const [error2, setError2] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const pin = form.pin.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;

        if (pin.length !== 5) {
            setError("PIN should be 5 digits");
            return;
        }
        if(phoneNumber.length){
            setError2("Phone Number should be 11 digits")
        }
        const userInfo = { name, pin, email, phoneNumber };
        try {
            const response = await axios.post("http://localhost:5000/register", userInfo);
            console.log(response.data);
            setError("");
        } catch (error) {
            console.error(error);
            setError("An error occurred during registration");
        }
    };

    return (
        <div>
            <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
                <form onSubmit={handleFormSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-3xl">Register</h2>
                    </div>
                    {error && <div className="mb-4 text-red-500">{error}</div>}
                    {error2 && <div className="mb-4 text-red-500">{error2}</div>}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
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
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mobile Number:</label>
                        <input
                            type="number"
                            name="phoneNumber"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
                        Submit
                    </button>
                    <h2 className="text-lg font-medium">Already have an accoutn? <Link to='/Login' className="btn-link">Login</Link></h2>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
