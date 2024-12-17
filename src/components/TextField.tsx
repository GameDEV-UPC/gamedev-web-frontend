import React, { useState } from 'react';
import '../styles/components/TextField.css';

interface TextFieldProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder = 'Enter text', value, onChange, type = 'text' }) => {
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
