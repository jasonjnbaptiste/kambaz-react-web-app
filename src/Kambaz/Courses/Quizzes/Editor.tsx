import { useParams } from "react-router";
import { Link, useLocation } from "react-router-dom";
import * as db from "../../Database";
import { FormControl, FormLabel, FormSelect, Form, Button, Nav } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function QuizDetailsEditor() {
  const { qid, cid } = useParams();
  const quizzes = db.quizzes;
  const quiz = quizzes.find((quiz) => quiz._id === qid)
  const courses = db.courses;
  const course = courses.find(() => quiz?.course === cid)
  const links = ["details", "questions"];
  const { pathname } = useLocation();
    return (
      <div id="wd-quiz-editor">
        <div style={{ textAlign: "right" }}>
          <>Points {quiz?.points}</> 
        </div> <br />
        <Nav variant="tabs">
          {links.map((link) => (
            <Nav.Item>
              <Nav.Link key={`/Kambaz/Courses/${course?._id}/Quizzes/${quiz?._id}/edit/${link}`} as={Link} to={`/Kambaz/Courses/${course?._id}/Quizzes/${quiz?._id}/edit/${link}`}
                        className={`${pathname.includes(link) ? "text-black" : "text-danger"} border border-0`}>
                {link.includes("details") ? "Details" : "Questions"}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <br />
        <FormControl id="wd-name" defaultValue={`${quiz?.title}`} /> <br />
        Quiz Instructions:
        <FormControl as="textarea" rows={3} defaultValue={`${quiz?.description}`}/>
        <br />
        <table>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", paddingRight: "10px" }}>
              <FormLabel htmlFor="wd-type">Quiz Type</FormLabel>
            </td>
            <td>
              <FormSelect id="wd-type" style={{ width: "150px" }}>
                <option defaultValue="Graded">Graded Quiz</option>
                <option value="Practice Quiz">Practice Quiz</option>
                <option value="Ungraded Survey">Ungraded Survey</option>
              </FormSelect>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", paddingRight: "10px" }}>
              <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
            </td>
            <td>
              <FormSelect id="wd-group" style={{ width: "150px" }}>
                <option defaultValue="Quizzes">Quizzes</option>
                <option value="Exams">Exams</option>
                <option value="Assignments">Assignments</option>
                <option value="Project">Project</option>
              </FormSelect>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", paddingRight: "10px" }}>
              <FormLabel htmlFor="wd-access-code">Access Code</FormLabel>
            </td>
            <td>
            <FormControl defaultValue={`${quiz?.details?.accessCode}`}/>
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td />
            <td style={{ textAlign: "left", verticalAlign: "top", paddingRight: "10px" }}>
              <b>Options</b>
            </td>
            <td></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", paddingRight: "10px" }}>
              <Form.Check type="checkbox" name="shuffle" />
            </td>
            <td style={{ textAlign: "left", verticalAlign: "top" }}>
              <FormLabel htmlFor="wd-shuffle">Shuffle Answers</FormLabel>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", paddingRight: "10px" }}>
              <Form.Check type="checkbox" name="time-limit" />
            </td>
            <td style={{ textAlign: "left", verticalAlign: "top" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FormLabel htmlFor="wd-time-limit" style={{ marginRight: "8px" }}>Time Limit</FormLabel>
                <FormControl id="minutes" style={{ width: "50px", marginRight: "8px" }} />
                <FormLabel htmlFor="wd-minutes">Minutes</FormLabel>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", paddingRight: "10px" }}>
              <Form.Check type="checkbox" name="multi-attempts" />
            </td>
            <td style={{ textAlign: "left", verticalAlign: "top" }}>
              <FormLabel htmlFor="wd-multi-attempts">Allow Multiple Attempts</FormLabel>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", paddingRight: "10px" }}>
              <Form.Check type="checkbox" name="show-correct" />
            </td>
            <td style={{ textAlign: "left", verticalAlign: "top" }}>
              <FormLabel htmlFor="wd-show-correct">Show Correct Answers</FormLabel>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", paddingRight: "10px" }}>
              <Form.Check type="checkbox" name="one-at-a-time" />
            </td>
            <td style={{ textAlign: "left", verticalAlign: "top" }}>
              <FormLabel htmlFor="wd-one-at-a-time">One Question at a Time</FormLabel>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", paddingRight: "10px" }}>
              <Form.Check type="checkbox" name="webcam" />
            </td>
            <td style={{ textAlign: "left", verticalAlign: "top" }}>
              <FormLabel htmlFor="wd-webcam">Webcam Required</FormLabel>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right", verticalAlign: "top", paddingRight: "10px" }}>
              <Form.Check type="checkbox" name="lock-questions" />
            </td>
            <td style={{ textAlign: "left", verticalAlign: "top" }}>
              <FormLabel htmlFor="wd-lock-questions">Lock Questions After Answering</FormLabel>
            </td>
          </tr><br />
          <tr>
            <td />
            <td align="left" valign="top">
                <form>
                <FormLabel htmlFor="wd-due-date"> Due </FormLabel><br />
                <FormControl type="date"
                defaultValue={`${quiz?.dueDateForm}`}
                id="wd-due-date"/><br/>
                </form>
            </td>
          </tr><br />
          <tr>
            <td />
            <td align="left" valign="top">
            <form>
                <FormLabel htmlFor="wd-available-from"> Available from </FormLabel><br />
                <FormControl type="date"
                defaultValue={`${quiz?.postDateForm}`}
                id="wd-available-from"/>
            </form>
            </td>
            <td>
            <form>
                <FormLabel htmlFor="wd-available-until"> Until </FormLabel><br />
                <FormControl type="date"
                defaultValue={`${quiz?.dueDateForm}`}
                id="wd-available-until"/><br/>
            </form>
            </td>
          </tr><br />
          <tr > 
            <td />
            <td />
            <td align="right" valign="top" style={{ padding: "10px" }}>
                <Link to={`../Quizzes`}>
                  <Button variant="secondary">
                    Cancel
                  </Button>
                </Link> 
                <Link to={`../Quizzes/${qid}`} style={{ padding: "5px" }}>
                  <Button variant="danger">
                    Save    
                  </Button>
                </Link>
                <Link to={`../Quizzes`}>
                  <Button variant="danger" style={{ padding: "5px" }}>
                    Save and Publish    
                  </Button>
                </Link>
            </td>
          </tr>
        </table>
      </div>
    )
}

export function QuizQuestionsEditor() {
  const { qid, cid } = useParams();
  const quizzes = db.quizzes;
  const quiz = quizzes.find((quiz) => quiz._id === qid)
  const courses = db.courses;
  const course = courses.find(() => quiz?.course === cid)
  const links = ["details", "questions"];
  const { pathname } = useLocation();
    return (
      <div id="wd-quiz-editor">
        <Nav variant="tabs">
          {links.map((link) => (
            <Nav.Item>
              <Nav.Link key={`/Kambaz/Courses/${course?._id}/Quizzes/${quiz?._id}/edit/${link}`} as={Link} to={`/Kambaz/Courses/${course?._id}/Quizzes/${quiz?._id}/edit/${link}`}
                        className={`${pathname.includes(link) ? "text-black" : "text-danger"} border border-0`}>
                {link.includes("details") ? "Details" : "Questions"}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <br />
        <div className="d-flex justify-content-center mt-2">
          <Button variant="secondary">
            <FaPlus className="me-2" />
            New Question
          </Button>
        </div>
        <br /> <hr />
        <Link to={`../Quizzes`}>
          <Button variant="secondary">
            Cancel
          </Button>
        </Link> 
        <Link to={`../Quizzes/${qid}`} style={{ padding: "5px" }}>
          <Button variant="danger">
            Save    
          </Button>
        </Link>
      </div>
)}