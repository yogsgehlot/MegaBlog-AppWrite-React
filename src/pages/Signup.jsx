import React from "react";
import { Signup as SignupComponent } from "../components";
import { bgStyle } from "../constant";
function Signup() {
  return (
    <div className={`py-8 ${bgStyle}`}>
      <SignupComponent />
    </div>
  );
}

export default Signup;
