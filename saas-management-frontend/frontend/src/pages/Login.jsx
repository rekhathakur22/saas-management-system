import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      // redirect based on role
      const role = data.role;
      if (role === "admin") navigate("/admin/dashboard");
      else navigate("/dashboard");
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
