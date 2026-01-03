import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("adminUser")) || null
  );

  const login = (email, password) => {
    // Get registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    
    // Check if user exists and password matches
    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      const admin = { email: user.email, name: user.name, role: "admin" };
      setUser(admin);
      localStorage.setItem("adminUser", JSON.stringify(admin));
      return true;
    }

    // Fallback to default admin credentials
    if (email === "admin@gmail.com" && password === "admin123") {
      const admin = { email, role: "admin" };
      setUser(admin);
      localStorage.setItem("adminUser", JSON.stringify(admin));
      return true;
    }
    return false;
  };

  const signup = (name, email, password) => {
    // Get existing registered users
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    
    // Check if email already exists
    const existingUser = registeredUsers.find((u) => u.email === email);
    if (existingUser) {
      return { success: false, message: "Email already registered" };
    }

    // Add new user
    const newUser = {
      name,
      email,
      password, // In production, this should be hashed
    };
    
    registeredUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    
    return { success: true, message: "Account created successfully" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("adminUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
