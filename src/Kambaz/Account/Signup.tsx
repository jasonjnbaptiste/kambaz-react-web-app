import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <Form.Control placeholder="username" 
              id="wd-username" 
              className="mb-2" />
      <Form.Control placeholder="password" 
              id="wd-password"
              type="password" 
              className="mb-2" />
      <Link id="wd-signup-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign up </Link>
      <Link id="wd-signin-link" to="/Kambaz/Account/Signin">Signin</Link>
    </div>
);}