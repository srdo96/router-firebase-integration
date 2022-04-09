import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h3>Please Login</h3>{" "}
      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Sign in using Google </button>
      </div>
      <form>
        <input type="email" placeholder="Enter your email" name="" id="" />{" "}
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name=""
          id=""
        />{" "}
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
