export const ContinueButton = ({ prevStep, currentStep }) => {
  return (
      <div className="flex justify-center gap-2">
          {
              currentStep != 0 && <button type="button" onClick={prevStep}>
                  Back
              </button>
          }
          <button type="submit" >
              Continue <span>{currentStep}/3</span>
          </button>
      </div>
  )
}
// export const ContinueButton = ({nextStep,prevStep, currentStep}) => {
//   return (
//     <div className="flex justify-center gap-2">
//       {
//         currentStep != 0 && <button type="button" onClick={prevStep}>
//           Back
//         </button>
//       }

//       <button type="submit" className="disabled:text-gray-400">
//         Continue <span>{currentStep}/3</span>
//       </button>
//     </div>
//   )
// }