import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import api from '../../api';
import logo from "../../assets/revgroup-logo.png";
import styles from "./index.module.css";
import { login } from '../../redux/slices/auth';

const Login = () => {
  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state: any) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = api.auth.login(username, password);

    if(result) {
      // Dispatch login action with userRole and token
      dispatch(login({
        firstname: result.firstname,
        lastname: result.lastname,
        username: result.username,
        userRole: result.userRole,
        token: result.token
      }));

      // Remove error message
      setError("");

      // Redirect to dashboard or home page
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  }

  useEffect(() => {
   if(auth.isAuthenticated)
      navigate("/");
  }, []);

  return (
    <div className={styles.LoginPage}>
      <div className="mb-4">
        <img src={logo} alt="RevGroup Logo" />
      </div>
      <h3 className="my-2">Please Sign In</h3>
      <form className={styles.LoginForm}>
        <div className="form-floating">
          <input 
            placeholder="Username" 
            className="form-control" 
            type="text" id="username" 
            name="username"
            value={username}
            onChange={handleUsernameChange} />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating">
          <input 
            placeholder="Password" 
            className="form-control" 
            type="password" 
            id="password" 
            name="password"
            value={password}
            onChange={handlePasswordChange} />
          <label htmlFor="password">Password</label>
        </div>
        <div className="text-danger mt-2">{error}</div>
        <div>
          <button className="btn btn-primary mt-3 px-5" type="submit" onClick={handleSubmit}>Login</button>
        </div>
      </form>
      <div className="mt-5">
        &copy; {new Date().getFullYear()} RevGroup. All rights reserved.
      </div>
    </div>
  );
};

export default Login;