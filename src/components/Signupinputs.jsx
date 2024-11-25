export default function Signupinputs() {
  return (
    <div className="flex justify-between">
      <div>
        <h1>Create An Account</h1>

        <div className="flex">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="flex flex-col">
          <input type="email" placeholder="Email Address" className="rounded-full  py-2 px-8 border-solid border-2 border-[#928E8E] mt-4"/>
          <input type="tel" placeholder="Phone Number" className="rounded-full  py-2 px-8 border-solid border-2 border-[#928E8E] mt-4"/>
          <input type="password" placeholder="Password" className="rounded-full  py-2 px-8 border-solid border-2 border-[#928E8E] mt-4"/>
          <input type="password" placeholder="Confirm Password" className="rounded-full  py-2 px-8 border-solid border-2 border-[#928E8E] mt-4"/>
          <button>Create Account</button>
          <p>OR</p>
          <button>Sign Up With Google</button>
          <p>Alredy Have An Account</p>
        </div>
      </div>

      <div>
        <img src="src/assets/signup.png" alt="Shop" />
      </div>
    </div>
  );
}
