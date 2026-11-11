
import { createContext, useContext, useState, type ReactNode } from "react";

interface Staff {
  id: string;
  name: string;
  email: string;
  staffId: string;
}

interface AuthContextType {
  staff: Staff | null;
  login: (staff: Staff) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [staff, setStaff] = useState<Staff | null>(() => {
    const savedStaff = localStorage.getItem("staff");
    return savedStaff ? JSON.parse(savedStaff) : null;
  });

  const login = (staff: Staff) => {
    localStorage.setItem("staff", JSON.stringify(staff));
    setStaff(staff);
  };

  const logout = () => {
    localStorage.removeItem("staff");
    setStaff(null);
  };

  return (
    <AuthContext.Provider value={{ staff, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
