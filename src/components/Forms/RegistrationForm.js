import React from 'react';
import ReactDOM from 'react-dom';
import useForm from "react-hook-form";
import './Forms.css';
import SignUpButton from '../Buttons/SignUpButton';
import ToggleToSignIn from '../Buttons/ToggleToSignIn';

function RegistrationForm () {
  const onSubmit = data => {
    alert(JSON.stringify(data));
  }
    return (
      <div className="container">
      <h1>Hello</h1>
      <form className="form-control" onSubmit={onSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            name="Email"
            />
        </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="Password"
              />
           </div>
          <div>
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              placeholder="Confirm password"
              name="Repeat Password"
             />
          </div>
        <SignUpButton />
        <ToggleToSignIn />
        </form>
      </div>
    )
}

export default RegistrationForm
