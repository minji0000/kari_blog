import React from "react";
import { Link } from "react-router-dom";
import KariInput from "./KariInput";

function Practice() {
  return (
    <div className="container test mt-5">
      <div>
        <Link to="/kariinput">
          그 뭐냐 그 연습하게 눌러바바
        </Link>
      </div>
    </div>
  )
}

  export default Practice;