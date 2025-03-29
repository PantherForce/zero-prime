import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "../firebase/firebase"; // Firebase auth
import { useNavigate } from "react-router-dom"; // For navigation
import { FaGoogle } from 'react-icons/fa'; // Google Icon
import axios from 'axios'; // For making the HTTP request

const GoogleLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("User Info:", user);

            // Get the ID token
            const idToken = await user.getIdToken();

            // Send the token and email to your backend for authentication
            const response = await axios.post("http://127.0.0.1:5000/login", {
                email: user.email,
                token: idToken,
            });

            window.localStorage.setItem("idToken", idToken)

            console.log("Backend response:", response.data);

            // After successful login and backend authentication, navigate to the home page
            navigate("/");

        } catch (error) {
            setError(error.message);
            console.error("Error signing in with Google: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
                <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
                    Login with Google
                </h2>

                {error && (
                    <div className="mb-4 text-red-600 text-center">
                        <p>{error}</p>
                    </div>
                )}

                <button
                    onClick={handleGoogleLogin}
                    className="w-full py-3 px-6 flex items-center gap-3 justify-center nav-btn primary"
                    disabled={loading}
                >
                    <FaGoogle size={24} /> {/* Google Icon */}
                    {loading ? "Signing In..." : "Sign in with Google"}
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;
