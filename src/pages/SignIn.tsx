import { useState } from 'react';
import LoginButton from '../components/LoginButton';
import InputPassword from '../components/InputPassword';
import TextField from '../components/TextField';
import '../styles/pages/Login.css';
import AnimatedText from "../components/AnimatedText.tsx";

function SignIn() {
    const [username, setUsername] = useState(''); // Estado para el nombre de usuario
    const [fullName, setFullName] = useState(''); // Estado para el nombre completo
    const [email, setEmail] = useState(''); // Estado para el correo electrónico
    const [password, setPassword] = useState(''); // Estado para la contraseña
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Estado para el mensaje de error
    const [isLoading, setIsLoading] = useState<boolean>(false); // Estado para mostrar un indicador de carga

    const handleRegister = async () => {
        console.log('Registrando usuario...');
        setErrorMessage(null); // Reinicia el mensaje de error
        setIsLoading(true); // Activa el estado de carga

        try {
            const response = await fetch('http://0.0.0.0:8000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: fullName,
                    username: username,
                    email: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Registration failed');
            }

            console.log('Usuario registrado exitosamente!');
            // Realiza alguna acción adicional como redirigir o mostrar un mensaje
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            setErrorMessage(error.message || 'Failed to register user. Please try again.');
        } finally {
            setIsLoading(false); // Desactiva el estado de carga
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
                    Sign In
                </AnimatedText>

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
               
                    
                />

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <LoginButton onClick={handleRegister} />

                {isLoading && <p className="loading-message">Loading...</p>}
            </div>
        </div>
    );
}

export default SignIn;
