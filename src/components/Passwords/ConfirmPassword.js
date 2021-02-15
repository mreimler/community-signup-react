import '../FormFields.css';

const ConfirmPassword = () => {
    return (
        <>
         <div class="form-control">
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              placeholder="Confirm password"
              name="Repeat Password"
            />
            <small>Error message</small>
          </div>
          </>
    )
}

export default ConfirmPassword
