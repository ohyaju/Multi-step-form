export const ContactStep = () => {
    return (
      <>
        <div className="space-y-2">
          <label>
            Email <span className="text-red-700">*</span>
          </label>
          <br />
          <input placeholder="Your email..." className="border" />
        </div>
        <div className="space-y-2">
          <label>
            Phone number <span className="text-red-700">*</span>
          </label>
          <br />
          <input placeholder="Your phone number..." className="border" />
        </div>
        <div className="space-y-2">
          <label>
            Password <span className="text-red-700">*</span>
          </label>
          <br />
          <input placeholder="Your password..." className="border" />
        </div>
        <div className="space-y-2">
          <label>
            Confirm password <span className="text-red-700">*</span>
          </label>
          <br />
          <input placeholder="Your confirm password..." className="border" />
        </div>
      </>
  
    )
  }