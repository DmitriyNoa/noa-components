import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextInput } from "../src";

const App = () => (
    <>
        <h1>My React and TypeScript App!</h1>
        <TextInput value={"123"}  />
    </>
);

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
