import '../FormFields.css';

const Password = () => {
    return (
   <>
            <div class="form-control">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="Password"
            />
            <small>Error message</small>
          </div> 
        </>
    )
}

export default Password
