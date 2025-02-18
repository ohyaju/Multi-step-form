export const UserInformationStep = () => {
  const onFirstNameChange = (event) => {
    props.setFormvalues((prev) => ({
      ...prev, firstName: event.target.
        value
    }))
  }
  const onLastNameChange = (event) => {
    props.setFormvalues((prev) => ({
      ...prev, lastName: event.target.
        value
    }))
  }
  const onUserNameChange = (event) => {
    props.setFormvalues((prev) => ({
      ...prev, userName: event.target.
        value
    }))
  }
  return (
    <>
      <div className="space-y-2">
        <label>
          First name <span className="text-red-700">*</span>
        </label>
        <br />
        <input onChange={onFirstNameChange} name="firstName" placeholder="Your first name..." className="border" />
      </div>
      <div className="space-y-2">
        <label>
          Last name <span className="text-red-700">*</span>
        </label>
        <br />
        <input onChange={onLastNameChange} name="lastName" placeholder="Your last name..." className="border" />
      </div>
      <div className="space-y-2">
        <label>
          User name <span className="text-red-700">*</span>
        </label>
        <br />
        <input onChange={onUserNameChange} name="userName" placeholder="Your user name..." className="border" />
      </div>
    </>

  )
}