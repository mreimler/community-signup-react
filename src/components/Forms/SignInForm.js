import './Forms.css';
import SignInButton from '../Buttons/SignInButton';
import ForgotPassword from '../Buttons/ForgotPassword';

function SignInForm ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
}) {
    return (
      <>
      <div className="container">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="text" 
            placeholder="Username" 
            name="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur} 
            required
            />
            {touched.username && errors.username}
            </div>
            <div>
            <label htmlFor="email">Email</label>
        <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            name="Email"
            value={values.email}
            onChange={handleChange} 
            onChange={handleChange} 
            onBlur={handleBlur}
            required/>
            {touched.email && errors.email}
        </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="Password"
              onChange={handleChange} 
              onBlur={handleBlur}
              required/>
            {touched.password && errors.password}
          </div>
        <SignInButton />
        <ForgotPassword />
        </form>
      </div>
    </>
    )
}

export default SignInForm
