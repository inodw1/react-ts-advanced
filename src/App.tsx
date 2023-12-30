import React, { useRef } from "react";
import Input from "./component/input.tsx";
import Button from "./component/button.tsx";
// import Container from "./component/container.tsx";
import Form, { type FormHandle } from "./component/form.tsx";

function App() {
    // const inputRef = useRef<HTMLInputElement>(null);
    const customFormRef = useRef<FormHandle>(null);

    const handleSave = (data: unknown) => {
        const extractedData = data as { name: string; age: string };
        console.log("extractedData: ", extractedData);
        customFormRef.current?.clear();
    };
    return (
        <main>
            <Form onSave={handleSave} ref={customFormRef}>
                <Input id="name" label="Your name" type="text" />
                <Input id="age" label="Your age" type="number" />
                <p>
                    <Button>Save</Button>
                </p>
            </Form>
        </main>
    );
}

export default App;
