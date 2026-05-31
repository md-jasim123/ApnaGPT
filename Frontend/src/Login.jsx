import { useState } from "react";
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setError("");
        try {
            if (isSignup) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="loginPage">
            <div className="loginBox">
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                <input type="email" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                {error && <p className="errorMsg">{error}</p>}
                <button onClick={handleSubmit}>
                    {isSignup ? "Sign Up" : "Login"}
                </button>
                <p onClick={() => setIsSignup(!isSignup)} className="toggleText">
                    {isSignup ? "Already have an account? Login" : "New user? Sign Up"}
                </p>
            </div>
        </div>
    );
}

export default Login;