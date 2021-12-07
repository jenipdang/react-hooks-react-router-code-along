import React from 'react'

function SignUp() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <div>
            <input type="text" name="fullName" placeholder="First & Last Name" />
          </div>
          <div>
            <input type="date" name="birthDate" placeholder="Date of Birth" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

  export default SignUp