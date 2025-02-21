export const ContinueButton = ({ prevStep, currentStep }) => {
  return (
      <div className="flex justify-center gap-2">
          {
              currentStep != 0 && <button className="text-black bg-white border rounded-md justify-center tex-align w-[300px] h-[44px] gap-8 mt-8" type="button" onClick={prevStep}>
                  Back
              </button>
          }
          <button className="text-white bg-black rounded-md justify-center w-[400px] h-[44px] gap-8 mt-8 text-align" type="submit" >
              Continue <span>{currentStep}/3</span>
          </button>
      </div>
  )
}
