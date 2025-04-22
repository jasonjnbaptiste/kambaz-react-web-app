import { Button, FormControl, FormLabel, FormSelect } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function MultipleChoiceQuestionEditor() {
  const { qid } = useParams();
  const quizzes = db.quizzes;
  quizzes.find((quiz) => quiz._id === qid)
  return (
    <div>
      <table>
        <tr>
          <td>
            <FormControl id="wd-title" defaultValue="New Question" style={{ width: "150px" }}/>
          </td>
          <td style={{ paddingLeft: "10px" }}>
            <FormSelect id="wd-type" style={{ width: "250px" }}>
              <option defaultValue="mutli-choice">Multiple Choice</option>
              <option value="true-false">True/False</option>
              <option value="fill-blank">Fill in the Blank</option>
            </FormSelect>
          </td>
          <td style={{ paddingLeft: "10px" }}>
            <FormLabel htmlFor="wd-points"><b>pts:</b></FormLabel>
          </td>
          <td>
            <FormControl id="wd-points" style={{ width: "50px" }}/>
          </td>
        </tr>
      </table>
      Enter your question and multiple answers, then select one correct answer.
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