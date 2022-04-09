import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register</h3>
      <form>
        <input type="text" placeholder="Your name" name="" id="" /> <br />
        <input type="email" placeholder="Enter your email" name="" id="" />{" "}
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name=""
          id=""
        />{" "}
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
