import React from "react";
import "./ForgetPassword.css";
function ForgetPassword() {
  return (
    <div className="Box">
      <div className="Box-a">
        <h1>Reset Password</h1>
        <input type="text" placeholder="✉️ Enter Email"></input>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default ForgetPassword;
