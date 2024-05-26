import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div className="contact_container">
      <form >
        <h2>SignUp</h2>

        <div className="form-group">
          <input type="text" placeholder="Name"
          />
        </div>

        <div className="form-group">
          <input type="number" placeholder="Phone Number"
          />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Email"
          />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Email"
          />
        </div>

        <div className="form-group">
          <input type="password" placeholder="Password"

            name='password'
          />
        </div>

        <div className="form-group">
          <button type='submit'>SignUp</button>
          <span>Already have an account? <Link to="/login">Login</Link></span>
        </div>
        <div className="Auth_btn">
        </div>
      </form>
    </div>
  )
}

export default Contact

