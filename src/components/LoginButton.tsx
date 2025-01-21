import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirigir
import '../styles/pages/Login.css'; // Importamos el archivo de estilos CSS

interface LoginButtonProps {
    onClick: () => Promise<void>;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>(''); // Para mostrar el error

    const navigate = useNavigate(); // Hook para navegar

    const handleClick = async () => {
        if (isLoading || isReady) return; // Evita múltiples clics

        setIsLoading(true);
        setIsError(false);
        setErrorMessage(''); // Limpiamos el mensaje de error

        try {
            await onClick(); // Llamada al método onClick pasado como prop
            const success = Math.random() > 0.5; // Simula una respuesta aleatoria de éxito o error

            if (success) {
                setIsReady(true); // Si el login fue exitoso
                navigate('/leaderboard'); // Redirige al leaderboard
            } else {
                throw new Error('Login failed'); // Simula un error
            }
        } catch (error) {
            console.error('Error during login:', error);
            setIsError(true);
            setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button
                className={`login-button ${isLoading ? 'loading' : ''} ${isReady ? 'ready' : ''} ${isError ? 'error' : ''}`}
                onClick={handleClick}
                disabled={isLoading || isReady} // Deshabilita el botón mientras carga o está listo
            >
                {isReady ? 'Ready' : isError ? 'Error' : isLoading ? '' : 'Login'}
                {isLoading && <div className="loading-square"></div>}
            </button>

            {isError && <div className="error-message">{errorMessage}</div>} {/* Mostrar error */}
        </div>
    );
};

export default LoginButton;
