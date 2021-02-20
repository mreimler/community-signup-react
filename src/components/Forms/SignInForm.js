import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import './Forms.css';
import SignInButton from '../Buttons/SignInButton';
import ForgotPassword from '../Buttons/ForgotPassword';
import ErrorMessage from '../ErrorMessage';


function SignInForm () {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();
  const onSubmit = data => {
    alert("You have successfully signed in! Welcome back.");
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
      <>
      <div className="container">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="text" 
            placeholder="Username" 
            name="Username"
            onBlur={e => validateUserName(e.target.value)}
            ref={register({ required: true, validate: validateUserName })}
            />
            </div>
            <div>
            <label htmlFor="email">Email</label>
        <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            name="Email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
        </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="Password"
              />
          </div>
        <SignInButton />
        <ForgotPassword />
        </form>
      </div>
    </>
    )
}

export default SignInForm
