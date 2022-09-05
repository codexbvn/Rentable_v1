import "./SignIn.css";
function SignIn() {
  return (
    <div id="signin_container">
      <h2>Sign In</h2>

      <form>
        <input type="text" placholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Submit</button>
        <a href="#" id="forgot_password_link">
          Forgot your password?
        </a>
      </form>
    </div>
  );
}

export default SignIn;
