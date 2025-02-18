export const ContinueButton = ({nextStep,currentStep}) => {
  return (
    <div>
      {
        currentStep != 1 && <button>
          Back
        </button>
      }

      <button onClick={nextStep} className="disabled:text-gray-400">
        Continue <span>{currentStep}/3</span>
      </button>
    </div>
  )
}