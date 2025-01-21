import React, { useState } from 'react';
import '../styles/pages/Login.css'; // Importamos el archivo de estilos CSS

interface TextFieldProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function TextField({ placeholder = 'Enter text', value, onChange, type = 'text' }: TextFieldProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`inputField ${isFocused ? 'focused' : ''}`}>
            <li>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}  // Cuando el campo recibe foco
                    onBlur={() => setIsFocused(false)}  // Cuando el campo pierde foco
                    placeholder={placeholder}
                />
            </li>
        </div>
    );
};

export default TextField;
