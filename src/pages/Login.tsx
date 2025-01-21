import React from "react";
import "../styles/pages/Login.css";
import TextField from "../components/TextField";
import InputPassword from "../components/InputPassword";
import LoginButton from "../components/LoginButton";
import AnimatedText from "../components/AnimatedText";
import useFormHandler from "../hooks/useFormHandler";
import colors from "../styles/colors";

function Login() {
    const { values, errorMessage, setErrorMessage, handleChange } = useFormHandler({
        username: "",
        password: "",
    });

    const handleLogin = async () => {
        console.log("Iniciando sesión...");
        setErrorMessage(null);

        try {
            const response = await fetch("http://0.0.0.0:8000/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed. Please try again.");
            }

            console.log("Login successful!");
        } catch (error) {
            setErrorMessage(error.message || "An error occurred. Please try again later.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <AnimatedText
                    size="3rem"
                    primaryColor={colors.primary}
                    glitchColor={colors.secondary}
                    glitchInterval={300}
                    probability={0.98}
                    glow={true}
                    glowColor={colors.primary}
                >
                    Log In
                </AnimatedText>

                <TextField
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={(e) => handleChange("username", e.target.value)}
                />
                <InputPassword
                    value={values.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                />

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <LoginButton onClick={handleLogin} />
            </div>
        </div>
    );
}

export default Login;
