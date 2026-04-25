import { useEffect, useState, Children } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/auth/me", {
        withCredentials: true,
      });

      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      await getUser();
    };
    init();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refetchUser: getUser }}>
      {children}
    </AuthContext.Provider>
  );
};
