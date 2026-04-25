import { useEffect, useState, Children } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { response } = await axios.get(
          "http://localhost:4000/api/auth/me",
          {
            withCredentials: true,
          },
        );
        setUser(response.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {Children}
    </AuthContext.Provider>
  );
};
