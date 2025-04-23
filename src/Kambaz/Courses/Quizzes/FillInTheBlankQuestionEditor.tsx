import { Button, FormControl, FormLabel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function FillInTheBlankQuestionEditor() {
  const { qid } = useParams();
  const quizzes = db.quizzes;
  quizzes.find((quiz) => quiz._id === qid)
  return (
    <div>
      Enter your question text, then define all possible correct answers for the blank.
      Students will only see the question followed by a small text box to type their answer.
      <h3><b>Question:</b></h3> <br />
      <FormControl as="textarea" rows={3} defaultValue="Question goes here."/> <br />
      <h3><b>Answers:</b></h3> <br />
      <table>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "bottom", paddingRight: "10px" }}>
              <FormLabel htmlFor="wd-answer">Possible Answer</FormLabel>
            </td>
            <td>
              <FormControl id="wd-type" style={{ width: "250px" }} />
            </td>
          </tr>
          <br />
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "bottom", paddingRight: "10px" }}>
              <FormLabel htmlFor="wd-answer">Possible Answer</FormLabel>
            </td>
            <td>
              <FormControl id="wd-type" style={{ width: "250px" }} />
            </td>
          </tr>
          <br />
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