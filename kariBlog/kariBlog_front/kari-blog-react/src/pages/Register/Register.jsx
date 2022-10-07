import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <div className="container test mt-5">
      <div>
        <Link to="/register">
          아직 회원이 아니시라면?
        </Link>
      </div>
    </div>
  )
}


        export default Register;