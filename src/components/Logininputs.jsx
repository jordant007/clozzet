export default function Logininputs() {
  return (
    <div className="flex gap-72">
      <div>
        <img src="src/assets/login.png" alt="Login png" />
      </div>
      <div>
        <h1>Login To Your Account</h1>
        <div>
          <input type="email" placeholder="Email Address" className="rounded-full  py-2 px-8 pr-[7em] border-solid border-2 border-[#928E8E] mt-4"/>
          <input type="password" placeholder="Password" className="rounded-full  py-2 px-8 pr-[7em] border-solid border-2 border-[#928E8E] mt-4"/>
          <div className="flex justify-between mt-[1em]">
          <label className="flex gap-2">
            <input type="checkbox"/>
            Remember Me
          </label>
          <p>Forgot Password</p>
          </div>
          <button className="rounded-full  py-2 px-[152px]  bg-[#45C9A1] text-white mt-[1em]">Sign In</button>
          <p className="text-center">OR</p>
          <button className="rounded-full  py-2 px-53 bg-[white] text-[blue] mt-[1em] flex flex-nowrap border-solid border-2 border-[#928E8E] item-center">Log In with Google</button>
          <p>Dont Have An Account Yet? Sign Up Free</p>
        </div>
      </div>
    </div>
  );
}