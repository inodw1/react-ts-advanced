import React from "react";

interface InputProps {
    id: string;
    label: string;
}

const Input = ({ id, label }: InputProps) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="texts" />
        </p>
    );
};

export default Input;
