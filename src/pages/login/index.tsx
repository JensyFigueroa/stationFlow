import logo from "../../assets/revgroup-logo.png";
import styles from "./index.module.css";

const Login = () => {
  return (
    <div className={styles.LoginPage}>
      <div className="mb-4">
        <img src={logo} alt="RevGroup Logo" />
      </div>
      <h3 className="my-2">Please Sign In</h3>
      <form className={styles.LoginForm}>
        <div className="form-floating">
          <input placeholder="Username" className="form-control" type="text" id="username" name="username" />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating">
          <input placeholder="Password" className="form-control" type="password" id="password" name="password" />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <button className="btn btn-primary mt-3 px-5" type="submit">Login</button>
        </div>
      </form>
      <div className="mt-5">
        &copy; {new Date().getFullYear()} RevGroup. All rights reserved.
      </div>
    </div>
  );
};

export default Login;