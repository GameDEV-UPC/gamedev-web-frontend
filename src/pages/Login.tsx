import React, { useState } from 'react';
import LoginButton from '../components/LoginButton';
import InputPassword from '../components/InputPassword';
import TextField from '../components/TextField';
import '../styles/pages/Login.css';
import AnimatedText from "../components/AnimatedText.tsx";

const Login: React.FC = () => {
    const [username, setUsername] = useState(''); // Estado para el nombre de usuario
    const [password, setPassword] = useState(''); // Estado para la contraseña
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Estado para el mensaje de error

    const handleLogin = async () => {
        console.log('Iniciando sesión...');
        setErrorMessage(null); // Reinicia el mensaje de error

        try {
            const response = await fetch('http://0.0.0.0:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (!response.ok) {
                // Si la respuesta no es 200-299, muestra un error
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Login failed. Please try again.');
                return;
            }

            const data = await response.json();
            console.log('Login successful:', data);

            // Aquí puedes guardar el token o cualquier dato necesario
            // Por ejemplo, localStorage.setItem('token', data.token);

        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <AnimatedText
                    size="3rem"
                    primaryColor="#fff"
                    glitchColor="#ff0080"
                    glitchInterval={300}
                    probability={0.98}
                    glow={true}
                >
                    Log In
                </AnimatedText>

                <TextField
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <InputPassword
                    
                />

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <LoginButton onClick={handleLogin} />
            </div>
        </div>
    );
};

export default Login;
