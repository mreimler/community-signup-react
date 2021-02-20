import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import './Forms.css';
import SignUpButton from '../Buttons/SignUpButton';
import ToggleToSignIn from '../Buttons/ToggleToSignIn';

function RegistrationForm () {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };  
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const validateUserName = async value => {
    await sleep(1000);
    if (value !== "bill") {
      setError("username", "validate");
    } else {
      clearError("username");
    }
  };
  
    return (
      <div className="container">
      <h1>Hello</h1>
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            name="Email"
            ref={register({ required: true })}
            />
        </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="Password"
              ref={register}
              />
           </div>
          <div>
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              placeholder="Confirm password"
              name="Repeat Password"
              ref={register}
             />
          </div>
        <SignUpButton />
        <ToggleToSignIn />
        </form>
      </div>
    )
}


export default RegistrationForm
