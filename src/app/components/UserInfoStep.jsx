import { ContinueButton } from "./ContinueButton"
import { InputField } from "./InputField"

export const UserInfoStep = ({ formValues, setFormValues, prevStep, nextStep, currentStep, formErrors, setFormErrors }) => {

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleNext = (event) => {
        event.preventDefault();

        if (!formValues.firstName) {
            setFormErrors((prev) => ({ ...prev, firstName: "Hooson baina" }))
        }

        if (!formValues.lastName) {
            setFormErrors((prev) => ({ ...prev, lastName: "Hooson baina" }))
        }

        if (!formValues.firstName || !formValues.lastName) {
            return;
        }

        nextStep();
    }

    return (
        <form className="mt-7" onSubmit={handleNext}>

            <InputField required label='First name' name="firstName" onChange={onChange} placeholder={'Enter your first name'} error={formErrors['firstName']} value={formValues.firstName} />

            <InputField required label='Last name' name="lastName" onChange={onChange} placeholder={'Enter your last name'} error={formErrors['lastName']} value={formValues.lastName} />

            <ContinueButton prevStep={prevStep} currentStep={currentStep} />
        </form>
    )
}

// import { ContinueButton } from "./ContinueButton";
// import { InputField } from "./InputField";

// export const UserInfoStep = ({ formValues, setFormValues, prevStep, nextStep, currentStep,
//   formErrors, setFormErrors }) => {

//   // const {setFormValues} = props; //destructure gdg uildel

//   const onChange = (event) => {
//     setFormValues((prev) => ({
//       ...prev, [event.target.name]:
//         event.target.value
//     }))
//   }

//   const handleNext = (event) => {
//     event.preventDefault();


//     if (!formValues.firstName) {
//       setFormErrors((prev) => ({ ...prev, firstName: "Hooson baina" }))
//     }
//     if (!formValues.lastName) {
//       setFormErrors((prev) => ({ ...prev, lastName: "Hooson baina" }))
//     }
//     if (!formValues.firstName || !formValues.lastName) {
//       return;
//     }

//     nextStep();

//   }
//   return (
//     <form className="mt-7" onSubmit={handleNext}>

//         <InputField required label='First name' name="firstName" onChange={onChange} placeholder={'Enter your first name'} error={formErrors['firstName']} value={formValues.firstName} />

//         <InputField required label='Last name' name="lastName" onChange={onChange} placeholder={'Enter your last name'} error={formErrors['lastName']} value={formValues.lastName} />

//         <ContinueButton prevStep={prevStep} currentStep={currentStep} />
//     </form>
// )
// }

//     <>
//       <div className="space-y-2">
//         <label>
//           First name <span className="text-red-700">*</span>
//         </label>
//         <br />
//         <input onChange={onChange} name="firstName"
//           placeholder="Your first name..." className="border" />
//       </div>
//       <div className="space-y-2">
//         <label>
//           Last name <span className="text-red-700">*</span>
//         </label>
//         <br />
//         <input onChange={onChange} name="lastName"
//           placeholder="Your last name..." className="border" />
//         {
//           formErrors.firstName && <p className="text-red-600">
//             {formErrors.firstName}</p>
//         }

//       </div>
//       <div className="space-y-2">
//         <label>
//           User name <span className="text-red-700">*</span>
//         </label>
//         <br />
//         <input onChange={onChange} name="userName"
//           placeholder="Your user name..." className="border" />
//       </div>

//       <ContinueButton nextStep={nextStep} currentStep=
//         {currentStep} />
//     </>

//   )
// }