import React from "react";
import "../styles/pages/Login.css";
import TextField from "../components/TextField";
import InputPassword from "../components/InputPassword";
import LoginButton from "../components/LoginButton";
import AnimatedText from "../components/AnimatedText";
import useFormHandler from "../hooks/useFormHandler";
import colors from "../styles/colors";
import Button from "../components/Button.tsx";

function Login() {
    const { values, errorMessage, isLoading, setErrorMessage, setIsLoading, handleChange } = useFormHandler({
        fullName: "",
        username: "",
        email: "",
        password: "",
    });

    const handleRegister = async () => {
        console.log("Registrando usuario...");
        setErrorMessage(null);
        setIsLoading(true);

        try {
            const response = await fetch("http://0.0.0.0:8000/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "Registration failed");
            }

            console.log("Usuario logeado exitosamente!");
        } catch (error) {
            setErrorMessage(error.message || "Failed to register user. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-title">
                    <AnimatedText
                        size="3rem"
                        primaryColor={colors.primary}
                        glitchColor={colors.secondary}
                        glitchInterval={150}
                        probability={0.95}
                        glow={true}
                        glowColor={colors.primary}
                    >
                        Log In
                    </AnimatedText>
                </div>

                <TextField
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={(e) => handleChange("username", e.target.value)}
                />
                <InputPassword
                    value={values.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                />



                <Button onClick={handleRegister}  >
                    {isLoading ? "Loading..." : "Log In"}
                </Button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}

            </div>
        </div>
    );
}

export default Login;
