import React, { useState } from 'react';
import LoginButton from '../components/LoginButton';
import InputPassword from '../components/InputPassword';
import TextField from '../components/TextField';
import '../styles/pages/Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState(''); // Estado para el nombre de usuario
    const [password, setPassword] = useState(''); // Estado para la contraseña
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Estado para el mensaje de error

    const handleLogin = async () => {
        console.log('Iniciando sesión...');
        setErrorMessage(null); // Reinicia el mensaje de error

        // Simula un retraso de 2 segundos para hacer el login
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Simula un 50% de probabilidad de éxito o error
        const success = Math.random() > 0.5;
        if (!success) {
            setErrorMessage('Login failed. Please check your credentials and try again.');
            throw new Error('Login failed');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1 className="login-title">Log in</h1>

                <TextField
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <InputPassword
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <LoginButton onClick={handleLogin}/>
            </div>
        </div>
    );
};

export default Login;
