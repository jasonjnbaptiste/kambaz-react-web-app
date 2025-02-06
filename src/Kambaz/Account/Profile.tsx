import { Form, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-Profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
             placeholder="alice"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="123" type="password"
             className="mb-2"/>
      <Form.Control id="wd-firstname"
             placeholder="Alice" 
             className="mb-2"/>
      <Form.Control id="wd-lasttname"
             placeholder="Wonderland" 
             className="mb-2"/>
      <Form.Control id="wd-dob"
             type="date" 
             className="mb-2"/>
      <Form.Control id="wd-email"
             placeholder="alice@wonderland"
             type="email" 
             className="mb-2"/>
      <FormSelect> id="wd-submission-type" 
            <option value="FACULTY">Faculty</option>
      </FormSelect>
      <Link id="wd-signout-link" 
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Signout</Link>
    </div> 
    );}