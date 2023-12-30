import React, {
    FormEvent,
    type ComponentPropsWithoutRef,
    useRef,
    forwardRef,
    useImperativeHandle,
} from "react";

export type FormHandle = {
    clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
    onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(
    ({ onSave, children, ...otherProps }, ref) => {
        const formRef = useRef<HTMLFormElement>(null);

        useImperativeHandle(ref, () => {
            return {
                clear() {
                    formRef.current?.reset();
                    console.log("CLEARING");
                },
            };
        });

        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const formData = new FormData(event.currentTarget);
            const data = Object.fromEntries(formData);
            onSave(data);
            formRef.current?.reset();
        };
        return (
            <form onSubmit={handleSubmit} ref={formRef} {...otherProps}>
                {children}
            </form>
        );
    }
);

export default Form;
