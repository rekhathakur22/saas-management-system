import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth/UseAuthContext";
import styles from "./Login.module.css";

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
    <form onSubmit={submitHandler} className={styles.form}>
      <h2 className={styles.heading}>Login</h2>

      <input
        type="text"
        placeholder="Enter your email"
        className={styles.input}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className={styles.input}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className={styles.button}>
        Login
      </button>
    </form>
  );
}

export default Login;
