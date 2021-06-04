const Button = (props) => {
  const colors = {
    primary: "bg-green-500 text-white",
    secondary: "bg-gray-200 text-gray-600",
    danger: "bg-red-500 text-white",
  };
  return (
    <button
      onClick={props.onClick}
      className={`rounded shadow-sm focus:shadow-none hover:opacity-75 px-6 py-2 mx-3 ${
        colors[props.color]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
