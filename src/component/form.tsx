import React, { FormEvent, type ComponentPropsWithoutRef } from "react";

type Formprops = ComponentPropsWithoutRef<"form"> & {
    onSave: (value: unknown) => void;
};

const Form = ({ onSave, children, ...otherProps }: Formprops) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    };
    return (
        <form onSubmit={handleSubmit} {...otherProps}>
            {children}
        </form>
    );
};

export default Form;
