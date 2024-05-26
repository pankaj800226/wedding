
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="contact_container">
  <form >
    <h2>Login</h2>

    <div className="form-group">
      <input type="text" placeholder="Email"

      />
    </div>

    <div className="form-group">
      <input type="password" placeholder="Password"

      />
    </div>

    <div className="form-group">
      <button type='submit'>SignUp</button>
      <span>Already have an account? <Link to="/contact">Login</Link></span>
    </div>
    <div className="Auth_btn">
    </div>
  </form>
</div>
  )
}

export default Login

