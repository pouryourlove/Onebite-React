export default function Button({ text, color, children }) {
  return (
    <button>
      {text} - {color}
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "black",
};
