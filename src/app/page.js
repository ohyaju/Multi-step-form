'use client'
import { Header } from "@/app/components/Header";
import { UserInfoStep } from "@/app/components/UserInfoStep";
import { ContinueButton } from "@/app/components/ContinueButton";
import { useState } from "react";
import { ContactStep } from "./components/ContactStep";


export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  })
  const [formErrors, setFormErrors] = useState({
    firstName: null,
    lastName: null,
    userName: null,
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  })
  const steps = [UserInfoStep];
  const Component = steps[currentStep]

  const nextStep = (event) => {
    event.preventDefault()
    setCurrentStep((prev) => prev + 1)
  }
  return (
    // <div className="h-screen w-screen flex justify-center bg-gray-50">   
    //   <div className="bg-white rounded-lg w-[460px] h-[516px] flex flex-col mx-auto ">
    //     <div className="text-black mx-4 w-[416px] h-[385] ">
    //       <div>
    //         <img className="w-14 h-14" src="logo.png"></img>
    //         <h1>Join Us! 😎</h1>
    //         <p>Please provide all current information accurately.</p>
    //         <div className="grid gap-4">
    //           <p className="text-[16px]">First name <span className="text-red-600">*</span></p>
    //           <input placeholder="Placeholder" className="rounded-md h-[44px] w-[416px]" />
    //           <p>Last name <span className="text-red-600">*</span></p>
    //           <input placeholder="Placeholder" className="rounded-md h-[44px] w-[416px]"/>
    //           <p>Username <span className="text-red-600">*</span></p>
    //           <input placeholder="Placeholder"className="rounded-md h-[44px] w-[416px]" />
    //         </div>
    //       </div>
    //       <div className="flex justify-center mt-40 ">
    //         <button className="text-white bg-black rounded-md flex justify-center w-[416px] h-[44px] gap-8">
    //           Continue 1/3
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <main>
      <div className="w-[480px] h-[655px] mx-auto bg-white shadow-sm p-8">
        <Header />

        <form className="mt-7 space-y-3">
          <Component
            formValues={formValues}
            setFormValues={setFormValues}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            currentStep={currentStep}
            nextStep={nextStep} />

        </form>

        {/* <ContinueButton currentStep={currentStep + 1} nextStep={nextStep} /> */}
      </div>
    </main>
  );
}
