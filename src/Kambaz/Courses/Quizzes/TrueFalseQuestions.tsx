import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function TrueFalseQuestion() {
  const { qid } = useParams();
  const quizzes = db.quizzes;
  quizzes.find((quiz) => quiz._id === qid)
  return (
    <div>
      Enter your question, then select if True or False is the correct answer.
      <h3><b>Question:</b></h3> <br />
      <FormControl as="textarea" rows={3} defaultValue="Question goes here."/> <br />
      <h3><b>Answers:</b></h3> <br />
      <table>
          <tr>
            <td style={{ textAlign: "right", paddingRight: "10px", verticalAlign: "top" }}>
              <Form.Check type="radio" name="true/false" value="true"/>
            </td>
            <td style={{ textAlign: "left", verticalAlign: "top" }}>
              <FormLabel htmlFor="wd-true/false">True</FormLabel>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", paddingRight: "10px", verticalAlign: "top" }}>
              <Form.Check type="radio" name="true/false" value="false"/>
            </td>
            <td style={{ textAlign: "left", verticalAlign: "top" }}>
              <FormLabel htmlFor="wd-true/false">False</FormLabel>
            </td>
          </tr>
      </table>
      <br />
      <Link to={`../Quizzes/${qid}/edit/questions`}>
        <Button variant="secondary">
          Cancel
        </Button>
      </Link> 
      <Link to={`../Quizzes/${qid}/edit/questions`} style={{ padding: "5px" }}>
        <Button variant="danger">
          Update Question    
        </Button>
      </Link>
    </div>
  )
}