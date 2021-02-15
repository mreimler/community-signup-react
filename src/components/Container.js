import './FormFields.css';
import Email from './Email';
import Password from './Passwords/Password'
import ConfirmPassword from './Passwords/ConfirmPassword';
import SignUpButton from './Buttons/SignUpButton';
import SignInButton from './Buttons/SignInButton';

const Container = () => {
    return (
        <div class="container">
      <h1>Hello</h1>  
      <Email />     
      <Password />
      <ConfirmPassword />
      <SignUpButton />
      <SignInButton />     
        </div>
    )
}

export default Container
