import { h } from "preact";

function Button({ onClick, children }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
