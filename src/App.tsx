import React from "react";
import Input from "./component/input.tsx";
import Button from "./component/button.tsx";

function App() {
    return (
        <main>
            <Input id="name" label="Your name" type="text" />
            <Input id="age" label="Your age" type="number" />

            <p>
                <Button el="button">A Button</Button>
            </p>
            <p>
                <Button
                    el="anchor"
                    href="https://inod-wagachchi.netlify.app/"
                    target="blank"
                >
                    A link
                </Button>
            </p>
        </main>
    );
}

export default App;
