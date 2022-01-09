import { h, render } from "preact";
import './styles.css';

function App() {
  return <h1>Hello world!</h1>;
}

render(<App />, document.body);

console.log('Hello from application.js');