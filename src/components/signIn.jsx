
export default function SignIn() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-white overflow-hidden">
      {/* Background Image */}

      {/* Header */}
      <div className="absolute left-8 top-8 flex items-center gap-2">
        <div className="w-10 h-10 flex items-center justify-center bg-[#497bff] text-white text-2xl font-bold font-sans rounded-lg">
          X
        </div>
        <div className="text-[#141414] text-2xl font-bold font-sans">Xertis</div>
      </div>

      {/* Sign-in Modal */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center gap-8">
          {/* Header Text */}
          <div className="text-center">
            <h2 className="text-2xl font-bold font-sans leading-loose">Sign Up</h2>
            <p className="mt-2 text-[#424242] text-base font-normal font-normal font-sans">
              Welcome to Xertis, the best certificate issuing platform. Please input your email address in order to sign up.
            </p>
          </div>

          {/* Input and Button */}
          <div className="w-full flex flex-col gap-6">
            <div className="h-[54px] px-4 py-3 bg-white border border-neutral-200 rounded-lg flex items-center">
              <input
                type="email"
                placeholder="Email"
                className="w-full text-neutral-500 text-sm font-medium font-sans outline-none"
              />
            </div>
            <button className="w-full px-6 py-2.5 bg-[#497bff] text-white text-base font-medium font-sans rounded-md transition-transform transform hover:scale-105">
              Request for OTP
            </button>
          </div>

          {/* Footer Text */}
          <div className="flex items-center gap-1">
            <span className="text-[#424242] text-sm font-normal font-sans">Have an account?</span>
            <a href="#" className="text-[#001563] text-sm font-semibold font-sans hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
