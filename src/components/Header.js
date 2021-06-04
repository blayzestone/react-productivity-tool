import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 flex justify-between items-center bg-gray-50 shadow-sm py-3 px-6">
      <Link to="/">
        <h1 className="text-xl hover:opacity-75 cursor-pointer">Pomodoro</h1>
      </Link>
      <Link
        className="text-xl text-gray-600 underline hover:no-underline hover:opacity-75"
        to="/settings"
      >
        Settings
      </Link>
    </header>
  );
};

export default Header;
