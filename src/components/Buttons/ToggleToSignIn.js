import React from 'react';
import './Buttons.css';
import SignInForm from '../Forms/SignInForm';

class ToggleToSignIn extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {  
  return (
        <div>
           <button onClick={this._onButtonClick}>
            Already a member? Sign In
          </button>
          {this.state.showComponent ?
           <SignInForm /> :
           null
        }
        </div>
    )
}
}

export default ToggleToSignIn