import React from "react";
import Layout from "../../core/Layout";

function Signup() {
  return (
    <Layout className={`flex justify-center items-center p-3`}>
      <div className="w-96 bg-white shadow-xl rounded-lg mt-4 py-4">
        <h1 className="register-heading px-6">Create an account</h1>
        <br />
        <form className="flex p-3 mx-10 flex-col">
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            className="px-3 py-1 rounded-lg outline-none input-bg placeholder:input-placeHolder"
          />
          <br />
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            className="px-3 py-1 rounded-lg input-bg outline-none placeholder:input-placeHolder"
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-3 py-1 rounded-lg input-bg outline-none placeholder:input-placeHolder"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-3 py-1 rounded-lg input-bg outline-none placeholder:input-placeHolder"
          />
          <br />
          <input
            type="submit"
            name="Submit"
            className="submit-btn px-3 py-1 rounded-md w-24"
          />
          <br />
          <hr className="hr-line rounded-sm"></hr>
          <br />
          <div>
            <span className="text-md">Already have an account? &nbsp; </span>
            <button className="border border-black px-4 rounded-3xl hover:bg-violet-900 hover:text-white">
              Signin
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Signup;
