import React from "react";
import Input from "./component/input.tsx";

function App() {
    return (
        <main>
            <Input id="name" label="Your name" />
            <Input id="age" label="Your age" />
        </main>
    );
}

export default App;
