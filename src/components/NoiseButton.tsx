import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importar useLocation y useNavigate
import gsap from "gsap";
import "../styles/components/NoiseButton.css";

interface RadioButtonGroupProps {
    options: { value: string; label: string; path: string }[];
}

const NoiseButton: React.FC<RadioButtonGroupProps> = ({ options }) => {
    const location = useLocation(); // Detectar la URL actual
    const [selectedValue, setSelectedValue] = useState<string>(() => {
        const currentOption = options.find(option => option.path === location.pathname);
        return currentOption ? currentOption.value : options[0].value; // Seleccionar Home si no hay coincidencia
    });

    const previousRadioRef = useRef<HTMLInputElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!containerRef.current) return;

        const nodes = (radio: HTMLInputElement) => {
            const container = radio.closest(".radio-btn-group");
            return [
                gsap.utils.shuffle(Array.from(container!.querySelectorAll(".blue rect"))),
                gsap.utils.shuffle(Array.from(container!.querySelectorAll(".pink rect")))
            ];
        };

        const animateEffect = (elements: any, isChecked: boolean) => {
            gsap.to(elements[0], {
                duration: 0.8,
                ease: "elastic.out(1, 0.3)",
                xPercent: isChecked ? "100" : "-100",
                stagger: 0.01,
                overwrite: true,
                delay: 0.13
            });

            gsap.to(elements[1], {
                duration: 0.8,
                ease: "elastic.out(1, 0.3)",
                xPercent: isChecked ? "100" : "-100",
                stagger: 0.01,
                overwrite: true
            });
        };

        const handleChange = (radio: HTMLInputElement) => {
            const newNodes = nodes(radio);
            if (previousRadioRef.current && previousRadioRef.current !== radio) {
                animateEffect(nodes(previousRadioRef.current), false);
            }
            animateEffect(newNodes, true);
            previousRadioRef.current = radio;
        };

        const inputs = containerRef.current.querySelectorAll("input[type='radio']");
        inputs.forEach((input) =>
            input.addEventListener("change", () => handleChange(input as HTMLInputElement))
        );

        const defaultRadio = Array.from(inputs).find(
    (input) => (input as HTMLInputElement).value === selectedValue
) as HTMLInputElement;

        if (defaultRadio) {
            const newNodes = nodes(defaultRadio);
            animateEffect(newNodes, true); // Ejecutar la animación para el botón preseleccionado
            previousRadioRef.current = defaultRadio; // Guardar la referencia del radio preseleccionado
        }

        return () => {
            inputs.forEach((input) =>
                input.removeEventListener("change", () => handleChange(input as HTMLInputElement))
            );
        };
    }, []);

    const handleOptionChange = (value: string, path: string) => {
        setSelectedValue(value);
        navigate(path); // Navegar a la nueva ruta
    };

    return (
        <div className="container" ref={containerRef}>
            {options.map((option, index) => (
                <div className="radio-btn-group" key={index}>
                    <input
                        type="radio"
                        id={`input-${index}`}
                        name="stagger-radio-group"
                        value={option.value}
                        checked={selectedValue === option.value} // Verificar si la opción está seleccionada
                        onChange={() => handleOptionChange(option.value, option.path)}
                    />
                    <label htmlFor={`input-${index}`}>
                        <span>{option.label}</span>
                        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <g className="pink">
                                {[...Array(10)].map((_, i) => (
                                    <rect key={`pink-${i}`} x="-100%" y={i * 5} width="100%" height="5" />
                                ))}
                            </g>
                            <g className="blue">
                                {[...Array(10)].map((_, i) => (
                                    <rect key={`blue-${i}`} x="-100%" y={i * 5} width="100%" height="5" />
                                ))}
                            </g>
                        </svg>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default NoiseButton;
