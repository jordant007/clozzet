export default function Logininputs() {
  return (
    <div className="flex gap-72">
      <div>
        <img src="src/assets/login.png" alt="Login png" />
      </div>

      <div>
        <h1>Login To Your Account</h1>

        <div>
          <input type="email" placeholder="Email Address" className="rounded-full  py-2 px-8 border-solid border-2 border-[#928E8E] mt-4"/>
          <input type="password" placeholder="Password" className="rounded-full  py-2 px-8 border-solid border-2 border-[#928E8E] mt-4"/>
          
          <div className="flex justify-between">
          <label className="flex">
            <input type="checkbox"/>
            Remember Me
          </label>

          <p>Forgot Password</p>
          </div>

          <button>Sign In</button>
          <p>OR</p>
          <button>Log In with Google</button>
          <p>Dont Have An Account Yet? Sign Up Free</p>
        </div>
      </div>
    </div>
  );
}
