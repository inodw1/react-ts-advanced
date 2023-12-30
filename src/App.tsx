import React, { useRef } from "react";
import Input from "./component/input.tsx";
import Button from "./component/button.tsx";
import Container from "./component/container.tsx";

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <main>
            <Input id="name" label="Your name" type="text" />
            <Input id="age" label="Your age" type="number" />
            <Input id="test" label="Test" type="text" ref={inputRef} />

            <p>
                {/* <Button el="button">A Button</Button> */}
                <Button>A Button</Button>
            </p>
            <p>
                {/* <Button
                    el="anchor"
                    href="https://inod-wagachchi.netlify.app/"
                    target="blank"
                >
                    A link
                </Button> */}
                <Button
                    href="https://inod-wagachchi.netlify.app/"
                    target="blank"
                >
                    A link
                </Button>
            </p>

            <Container
                as={Button}
                type="button"
                onClick={() => {
                    console.log("[iw] Clicked! ---> ");
                }}
            >
                Click me!
            </Container>
        </main>
    );
}

export default App;
