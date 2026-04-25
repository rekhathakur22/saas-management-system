import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth/UseAuthContext";

function Login() {
  const navigate = useNavigate();
  const { user, loading, refetchUser } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!loading && user) {
      navigate(user.role === "admin" ? "/admin" : "/employee");
    }
  }, [user, loading, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      await refetchUser();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
