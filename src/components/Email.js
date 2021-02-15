import './FormFields.css';

const Email = () => {
    return (
        <>
     <div class="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Email" name="Email" />
            <small>Error message</small>
          </div>
      </>
    )
}

export default Email
