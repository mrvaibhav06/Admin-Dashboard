import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const { logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Left */}
      <h1 className="text-xl font-semibold tracking-wide text-gray-800 dark:text-white">
        Admin Dashboard
      </h1>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-4 py-1.5 rounded-lg border text-sm font-medium
                     text-gray-700 dark:text-gray-200
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="px-4 py-1.5 rounded-lg text-sm font-medium
                     bg-red-500 hover:bg-red-600 text-white transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
