import { ContinueButton } from "./ContinueButton";
import { InputField } from "./InputField";

export const ContactInfoStep = ({ formValues, setFormValues, prevStep, nextStep, currentStep, formErrors, setFormErrors }) => {

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleNext = (event) => {
        event.preventDefault();

        if (!formValues.email) {
            setFormErrors((prev) => ({ ...prev, email: "Hooson baina" }))
        }

        if (!formValues.phoneNumber) {
            setFormErrors((prev) => ({ ...prev, phoneNumber: "Hooson baina" }))
        }


        if (!formValues.password) {
            setFormErrors((prev) => ({ ...prev, password: "Hooson baina" }))
        }

        if (!formValues.email || !formValues.phoneNumber || !formValues.password) {
            return;
        }

        nextStep();
    }

    return (
        <form onSubmit={handleNext} className="mt-7">
            <InputField required label='Email' name="email" onChange={onChange} placeholder={'Enter your email'} error={formErrors['email']} />

            <InputField required label='Phone number' name="phoneNumber" onChange={onChange} placeholder={'Enter your phone number'} error={formErrors['phoneNumber']} />

            <InputField required label='Password' name="password" onChange={onChange} placeholder={'Enter your password'} error={formErrors['password']} />

            <ContinueButton prevStep={prevStep} currentStep={currentStep} />
        </form>
    )
}
// import { ContinueButton } from "./ContinueButton";
// import { InputField } from "./InputField";

// export const ContactStep = ({ formValues, setFormValues, prevStep, nextStep, currentStep, formErrors, setFormErrors }) => {

//     const onChange = (event) => {
//         setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
//     }

//     const handleNext = (event) => {
//         event.preventDefault();

//         if (!formValues.email) {
//             setFormErrors((prev) => ({ ...prev, email: "Hooson baina" }))
//         }

//         if (!formValues.phoneNumber) {
//             setFormErrors((prev) => ({ ...prev, phoneNumber: "Hooson baina" }))
//         }


//         if (!formValues.password) {
//             setFormErrors((prev) => ({ ...prev, password: "Hooson baina" }))
//         }

//         if (!formValues.email || !formValues.phoneNumber || !formValues.password) {
//             return;
//         }

//         nextStep();
//     }

//     return (
//         <form onSubmit={handleNext} className="mt-7">
//             <InputField required label='Email' name="email" onChange={onChange} placeholder={'Enter your email'} error={formErrors['email']} />

//             <InputField required label='Phone number' name="phoneNumber" onChange={onChange} placeholder={'Enter your phone number'} error={formErrors['phoneNumber']} />

//             <InputField required label='Password' name="password" onChange={onChange} placeholder={'Enter your password'} error={formErrors['password']} />

//             <ContinueButton prevStep={prevStep} currentStep={currentStep} />
//         </form>
//     )
// }

// export const ContactStep = (props) => {

//   const onEmailChange = (event) => {
//     props.setFormvalues((prev) => ({
//       ...prev, email: event.target.
//         value
//     }))
//   }
//   const onPhoneNumberChange = (event) => {
//     props.setFormvalues((prev) => ({
//       ...prev, phoneNumber: event.target.
//         value
//     }))
//   }
//   const onPasswordChange = (event) => {
//     props.setFormvalues((prev) => ({
//       ...prev, password: event.target.
//         value
//     }))
//   }
//   const onConfirmPasswordChange = (event) => {
//     props.setFormvalues((prev) => ({
//       ...prev, confirmPassword: event.target.
//         value
//     }))
//   }

//     return (
//       <>
//         <div className="space-y-2">
//           <label>
//             Email <span className="text-red-700">*</span>
//           </label>
//           <br />
//           <input onChange={onEmailChange} placeholder="Your email..." className="border" />
//         </div>
//         <div className="space-y-2">
//           <label>
//             Phone number <span className="text-red-700">*</span>
//           </label>
//           <br />
//           <input onChange={onPhoneNumberChange} placeholder="Your phone number..." className="border" />
//         </div>
//         <div className="space-y-2">
//           <label>
//             Password <span className="text-red-700">*</span>
//           </label>
//           <br />
//           <input onChange={onPasswordChange} placeholder="Your password..." className="border" />
//         </div>
//         <div className="space-y-2">
//           <label>
//             Confirm password <span className="text-red-700">*</span>
//           </label>
//           <br />
//           <input onChange={onConfirmPasswordChange} placeholder="Your confirm password..." className="border" />
//         </div>
//       </>
  
//     )
//   }