import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import './Forms.css';
import SignUpButton from '../Buttons/SignUpButton';
import ToggleToSignIn from '../Buttons/ToggleToSignIn';
import ErrorMessage from '../ErrorMessage';

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
    alert("You have successfully signed up! Please check your");
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
            ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
            />
            <ErrorMessage error={errors.email} />
        </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="Password"
              ref={register({ required: true, minLength: 8 })}
              />
              <ErrorMessage error={errors.password} />
           </div>
          <div>
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              placeholder="Confirm password"
              name="Repeat Password"
              ref={register({ required: true, minLength: 8 })}
             />
             <ErrorMessage error={errors.password2} />
          </div>
        <SignUpButton />
        <ToggleToSignIn />
        </form>
      </div>
    )
}


export default RegistrationForm
