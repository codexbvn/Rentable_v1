import React from "react";
import { useState } from "react";
import Layout from "../../core/Layout";
import Error from "../ErrorHandler/Error";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  //react hooks
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    isLoading: false,
    redirectTo: null,
    setError: "",
  });
  //on Change method
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  //on submit method
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout className={`flex flex-col justify-center items-center p-3`}>
      <Error
        alertMessage={"Successfully created an account!"}
        alertType={"success"}
      />
      <div className="w-96 bg-white shadow-xl rounded-lg mt-4 py-4">
        <h1 className="register-heading px-6">Create an account</h1>
        <br />
        <form className="flex p-3 mx-10 flex-col">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={userData.first_name}
            onChange={handleChange}
            className="px-3 py-1 rounded-lg outline-none input-bg placeholder:input-placeHolder"
          />
          <br />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={userData.last_name}
            onChange={handleChange}
            className="px-3 py-1 rounded-lg input-bg outline-none placeholder:input-placeHolder"
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            className="px-3 py-1 rounded-lg input-bg outline-none placeholder:input-placeHolder"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
            className="px-3 py-1 rounded-lg input-bg outline-none placeholder:input-placeHolder"
          />
          <br />
          <button
            className="submit-btn px-3 py-1 rounded-md w-24 cursor-pointer"
            onClick={handleSubmit}
          >
            Register
          </button>
          <br />
          <div>
            <hr className="hr-line rounded-sm"></hr>
            <br />
            <span className="font-normal text-sm relative -top-9 z-1 bg-white px-1 left-32">
              OR
            </span>
          </div>
          <div>
            <span className="text-md">Already have an account? &nbsp; </span>
            <Link
              to="/signin"
              className="border border-black px-4 py-1 rounded-3xl hover:bg-purple-main hover:text-white"
            >
              Signin
            </Link>
          </div>
        </form>
      </div>
      <br />
    </Layout>
  );
}

export default Signup;
