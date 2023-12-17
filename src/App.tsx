import React from "react";
import Input from "./component/input.tsx";

function App() {
    return (
        <main>
            <Input id="name" label="Your name" type="text" />
            <Input id="age" label="Your age" type="number" />
        </main>
    );
}

export default App;
