'use client'




export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center bg-gray-50">   
      <div className="bg-white rounded-lg w-[480px] h-[655px] flex flex-col">
        <div className="text-black mx-4 w-[416px] h-[385] ">
          <div>
            <img className="w-14 h-14" src="logo.png"></img>
            <h1>Join Us! 😎</h1>
            <p>Please provide all current information accurately.</p>
            <div className="grid gap-4">
              <p className="text-[16px]">First name <span className="text-red-600">*</span></p>
              <input placeholder="Placeholder" className="rounded-md h-[44px] w-[416px]" />
              <p>Last name <span className="text-red-600">*</span></p>
              <input placeholder="Placeholder" className="rounded-md h-[44px] w-[416px]"/>
              <p>Username <span className="text-red-600">*</span></p>
              <input placeholder="Placeholder"className="rounded-md h-[44px] w-[416px]" />
            </div>
          </div>
          <div className="flex justify-center mt-40 ">
            <button className="text-white bg-black rounded-md flex justify-center w-[416px] h-[44px] gap-8">
              Continue 1/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
