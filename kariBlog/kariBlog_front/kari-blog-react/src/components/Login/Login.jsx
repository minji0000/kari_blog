import React from "react";
//import "./Login.css";

function Login() {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          ID <input className="form-control" name="username" />
          <br />
          <br />
          <div className="mb-3">
            PASSWORD <input className="form-control" name="password" />
          </div>
          <button className="btn btn-outline-primary"> LogIn </button>
        </div>
      </form>
    </div>
  );
}

export default Login;