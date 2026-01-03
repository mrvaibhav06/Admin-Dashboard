import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Users", path: "/users" },
  { name: "Products", path: "/products" },
  { name: "Orders", path: "/orders" },
  { name: "Analytics", path: "/analytics" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl">
      {/* Logo / Title */}
      <div className="p-5 text-2xl font-bold border-b border-gray-700 tracking-wide">
        Admin Panel
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
              flex items-center gap-3 px-4 py-2 rounded-lg
              text-sm font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            `
            }
          >
            {/* Bullet / Indicator */}
            <span
              className={`h-2 w-2 rounded-full ${
                window.location.pathname === item.path
                  ? "bg-white"
                  : "bg-gray-500"
              }`}
            ></span>

            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
