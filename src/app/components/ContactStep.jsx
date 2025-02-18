export const ContactStep = (props) => {

  const onEmailChange = (event) => {
    props.setFormvalues((prev) => ({
      ...prev, email: event.target.
        value
    }))
  }
  const onPhoneNumberChange = (event) => {
    props.setFormvalues((prev) => ({
      ...prev, phoneNumber: event.target.
        value
    }))
  }
  const onPasswordChange = (event) => {
    props.setFormvalues((prev) => ({
      ...prev, password: event.target.
        value
    }))
  }
  const onConfirmPasswordChange = (event) => {
    props.setFormvalues((prev) => ({
      ...prev, confirmPassword: event.target.
        value
    }))
  }

    return (
      <>
        <div className="space-y-2">
          <label>
            Email <span className="text-red-700">*</span>
          </label>
          <br />
          <input onChange={onEmailChange} placeholder="Your email..." className="border" />
        </div>
        <div className="space-y-2">
          <label>
            Phone number <span className="text-red-700">*</span>
          </label>
          <br />
          <input onChange={onPhoneNumberChange} placeholder="Your phone number..." className="border" />
        </div>
        <div className="space-y-2">
          <label>
            Password <span className="text-red-700">*</span>
          </label>
          <br />
          <input onChange={onPasswordChange} placeholder="Your password..." className="border" />
        </div>
        <div className="space-y-2">
          <label>
            Confirm password <span className="text-red-700">*</span>
          </label>
          <br />
          <input onChange={onConfirmPasswordChange} placeholder="Your confirm password..." className="border" />
        </div>
      </>
  
    )
  }