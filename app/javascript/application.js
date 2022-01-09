import { h, Fragment, render } from "preact";
import { useState } from "preact/hooks";
import Button from "./components/button";
import "./styles.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 class="text-xl">Hello world!</h1>
      <Button onClick={() => setCounter((previousValue) => previousValue + 1)}>
        Click me!
      </Button>
      <p>You clicked the button {counter} times.</p>
    </>
  );
}

render(<App />, document.body);

console.log("Hello from application.js");
