export const ContinueButton = () => {
  return (
    <div>
      {
        props.currentStep != 1 && <button>
          Back
        </button>
      }

      <button onClick={props.nextStep}>
        Continue <span>{props.currentStep}/3</span>
      </button>
    </div>
  )
}