import React from 'react'
import * as Yup from "yup";
export default function RegisterForm() {



  return (
    <>
    <div className="flex mt-7 w-auto">
        <input
          className={this.inputStyle + ` mr-3`}
          name="first"
          type="text"
          placeholder="First Name"
          onChange={this.handleChange}
          value={this.state.first}
          required
        />
        <input
          className={this.inputStyle}
          name="last"
          type="text"
          placeholder="Last Name"
          onChange={this.handleChange}
          value={this.state.last}
        />
      </div>

      {/* Email */}
      <input
        className={this.inputStyle + ` mt-7 mobile:w-[100%]`}
        name="email"
        type="email"
        placeholder="Email"
        onChange={this.handleChange}
        value={this.state.email}
        required
      />

      {/* Password */}
      <div className="flex mt-7">
        <input
          className={this.inputStyle + ` mr-3`}
          name="pass"
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.pass}
          required
        />
        <input
          className={this.inputStyle}
          name="confirm"
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
          value={this.state.confirm}
          required
        />
      </div>
      <div className="flex justify-center">
        <span className="flex-1 mr-3"></span>
        <span className="flex-1 text-red-500">
          {this.state.errors.confirm}
        </span>
      </div>

      {/* Submit button */}
      <input
        type="button"
        className={(this.state.errors.confirm)? this.buttonStyle+this.disableButtonStyle: this.buttonStyle+this.activeButtonStyle}
        value="Sign up"
      />
     </>
    
  )
}
