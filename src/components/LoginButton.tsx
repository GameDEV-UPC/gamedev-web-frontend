import React, { useState } from 'react';
import '../styles/components/LoginButton.css'; // Importamos el archivo de estilos CSS

interface LoginButtonProps {
    onClick: () => Promise<void>;

}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleClick = async () => {
        if (isLoading || isReady) return; // Evita múltiples clics

        setIsLoading(true);
        setIsError(false);
        try {
            await onClick();
            const success = Math.random() > 0.5; // Simula una respuesta aleatoria de éxito o error
            if (success) {
                setIsReady(true);
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            className={`login-button ${isLoading ? 'loading' : ''} ${isReady ? 'ready' : ''} ${isError ? 'error' : ''}`}
            onClick={handleClick}
            disabled={isLoading || isReady} // Deshabilita el botón mientras carga o está listo
        >
            {isReady ? 'Ready' : isError ? 'Error' : isLoading ? '' : 'Login'}
            {isLoading && <div className="loading-square"></div>}
        </button>
    );
};

export default LoginButton;
