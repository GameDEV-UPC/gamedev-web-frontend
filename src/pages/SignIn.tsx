import React, { useState } from 'react';
import LoginButton from '../components/LoginButton';
import InputPassword from '../components/InputPassword';
import TextField from '../components/TextField';
import '../styles/pages/Login.css';

const SignIn: React.FC = () => {
    const [username, setUsername] = useState(''); // Estado para el nombre de usuario
    const [password, setPassword] = useState(''); // Estado para la contraseña
    const [fullName, setFullName] = useState(''); // Estado para el nombre completo
    const [email, setEmail] = useState(''); // Estado para el correo electrónico
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Estado para el mensaje de error
    const [isLoading, setIsLoading] = useState<boolean>(false); // Estado para mostrar un indicador de carga

    const handleLogin = async () => {
        console.log('Iniciando sesión...');
        setErrorMessage(null); // Reinicia el mensaje de error
        setIsLoading(true); // Activa el estado de carga

        try {
            // Simula un retraso de 2 segundos para hacer el login
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simula un 50% de probabilidad de éxito o error
            const success = Math.random() > 0.5;
            if (!success) {
                setErrorMessage('Login failed. Please check your credentials and try again.');
                throw new Error('Login failed');
            }

            // Si el login es exitoso, redirige o actualiza el estado de la aplicación
            console.log('Login successful!');
        } catch (error) {
            console.error('Error de inicio de sesión:', error);
        } finally {
            setIsLoading(false); // Desactiva el estado de carga
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h1 className="login-title">Sign In</h1>

                <TextField
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <TextField
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <InputPassword
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <LoginButton onClick={handleLogin} disabled={isLoading} />

                {isLoading && <p className="loading-message">Loading...</p>}
            </div>
        </div>
    );
};

export default SignIn;
