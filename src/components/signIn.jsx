export default function SignIn() {
  return (
    <>
      <div className="w-[1440px] h-[960px] relative bg-white">
        <div className="origin-top-left -rotate-180 opacity-70 w-[1440px] h-[889.68px] left-[1738px] top-[1490.94px] absolute"></div>
        <div className="left-[112px] top-[48px] absolute justify-start items-center gap-2 inline-flex">
          <div className="w-10 h-10 p-[12.12px] bg-[#497bff] items-center rounded-lg justify-start gap-[12.12px] inline-flex"><p className="text-white text-2xl font-bold font-['Lexend']">X</p></div>
          <div className="text-[#141414] text-2xl font-bold font-['Lexend']">
            Xertis
          </div>
        </div>
        <div className="left-[550px] top-[205px] absolute flex-col justify-center items-center gap-8 inline-flex">
          <div className="p-8 bg-white rounded-lg justify-start items-start gap-2.5 inline-flex">
            <div className="flex-col justify-start items-center gap-8 inline-flex">
              <div className="flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-center text-[#141414] text-2xl font-semibold font-['Lexend'] leading-loose">
                    Sign Up
                  </div>
                  <div className="w-[458px] text-center text-[#424242] text-base font-normal font-['Lexend'] mb-8">
                    Welcome to Xertis, the best certificate issuing platform. Please input your email address in order to sign
                    up.
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[122px] rounded-xl flex-col justify-start items-center gap-6 flex">
                <div className="self-stretch mt-4 h-[54px] px-3.5 py-3 bg-white rounded-lg border border-neutral-200 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-neutral-500 text-sm font-medium font-['Lexend'] leading-tight">
                      Email
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-[18px] py-2.5 bg-[#497bff] rounded-md border border-[#497bff] justify-center items-center gap-2 inline-flex">
                  <div className="text-white text-base font-medium font-['Lexend'] leading-normal">
                    Request for OTP
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-1 inline-flex">
                <div className="text-[#424242] text-sm font-normal font-['Lexend'] leading-tight">
                  Have an account?
                </div>
                <div className="text-[#001563] text-sm font-semibold font-['Lexend'] leading-tight">
                  Log in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
