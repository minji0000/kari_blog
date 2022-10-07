import React from "react";
import "./Login.css";

function Login() {
  return (
    
    <div className="container test">
      <form className="input" method="post">
        ID <input className="form-control btn-kari mb-3" name="username" />
        PASSWORD <input className="form-control btn-kari mb-5" name="password" />
        <button className="btn-kari btn1" id="btn-login"> LogIn </button>
      </form>
    </div>
  );
}

export default Login;