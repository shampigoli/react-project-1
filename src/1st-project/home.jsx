import React, { useState } from "react";
import aj from "../src/aj-logo.png";
import shampi from "../src/shampi.jpeg";
import SignIn from "./signin";
import Register from "./register";
function Home() {
  const [form, setForm] = useState("SignIn");
  return (
    <>
      <img src={aj} alt="" className="logo" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          margin: "0 auto",
        }}
      >
        <div className="container">
          <div>
            <h1>Sign In to</h1>
            <h5>Lorem, ipsum dolor sit </h5>
            <div >
            <p>
              If you don’t have an account register
            <br />
              You can &nbsp;
            {form === "SignIn" ? 
              <button className="shampo"
              type="button"
                onClick={() => {
                  setForm("Register");
                }}
              >
                Register Now
              </button>
            : 
              <button className="shampo"
              type="button"
                onClick={() => {
                  setForm("SignIn");
                }}
              >
                Sign in Now
              </button>
            }
            </p>
            </div>
            <figure className="images">
              <img src={shampi} alt="" className="image" />
            </figure>
          </div>
        </div>
        {form === "SignIn" ? 
        <SignIn />:<Register/>}
      </div>
    </>
  );
}
export default Home;
